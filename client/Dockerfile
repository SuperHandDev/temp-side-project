FROM node:18 AS build
WORKDIR /app
COPY package.json .
COPY yarn.lock* .
RUN corepack enable && corepack prepare yarn@4.0.0 --activate && yarn install
COPY . .
RUN yarn build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
