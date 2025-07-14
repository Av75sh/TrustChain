FROM node:18 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

RUN npm install --omit=dev
RUN npm install -g vite

EXPOSE 5173
CMD ["vite", "preview", "--host", "0.0.0.0", "--port", "5173"]

