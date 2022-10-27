FROM node:latest

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "run", "start", "front-end", "backend"]