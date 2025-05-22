import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './message.entity';

@WebSocketGateway()
export class ChatGateway {
  constructor(
    @InjectRepository(Message)
    private messages: Repository<Message>
  ) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  async handleMessage(@MessageBody() message: string) {
    const msg = this.messages.create({ text: message });
    await this.messages.save(msg);
    this.server.emit('message', msg.text);
  }
}
