import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io();

export default function App() {
  const [messages, setMessages] = useState<string[]>([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    socket.on('message', (msg: string) => {
      setMessages(prev => [...prev, msg]);
    });
  }, []);

  const send = () => {
    socket.emit('message', value);
    setValue('');
  };

  return (
    <div>
      <h1>Chat</h1>
      <ul>
        {messages.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
  );
}
