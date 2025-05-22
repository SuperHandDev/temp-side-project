# Chat App Monorepo

This repository contains a simple chat service built with React and NestJS. The project is organised as a monorepo using **Yarn 4** workspaces.

## Packages

- `client` – React front‑end powered by Vite and Socket.IO.
- `server` – NestJS backend using Socket.IO and TypeORM.

## Development

Requirements:

- Node.js 18+
- Yarn 4 (run `corepack enable && corepack prepare yarn@4.0.0 --activate`)
- Docker (for MySQL and Nginx)

### Run with Docker Compose

The provided `docker-compose.yml` starts development servers for the React
client and the NestJS backend using official Node images. All dependencies are
installed inside the containers on startup, so you only need to make sure Docker
is available on your machine.

```bash
docker-compose up
```

On Windows with Git Bash or similar shells, Docker may fail with an "invalid
volume specification" error when mounting project directories. Setting the
environment variable `COMPOSE_CONVERT_WINDOWS_PATHS=1` before running
`docker-compose` converts Windows paths to a format Docker understands:

```bash
export COMPOSE_CONVERT_WINDOWS_PATHS=1
docker-compose up
```

The client will be available at `http://localhost:5173` in development. Nginx serves the built client on port `80` in production.
