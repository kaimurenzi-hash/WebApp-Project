
FROM node:22-alpine

WORKDIR /app

COPY package.json .

COPY server.js .

COPY index.html .

COPY login.html .

COPY register.html .

COPY registration.html .

COPY styles.css .

EXPOSE 3000

CMD ["npm", "start"]
