FROM node:18
WORKDIR /app
COPY package.json .
COPY yarn.lock* .
RUN corepack enable && corepack prepare yarn@4.0.0 --activate && yarn install
COPY . .
RUN yarn build
CMD ["node", "dist/main"]
