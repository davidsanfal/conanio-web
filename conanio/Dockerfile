FROM node:16-alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn test:ci
RUN yarn dev

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
