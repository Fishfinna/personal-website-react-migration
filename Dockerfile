FROM node:latest

WORKDIR /app
COPY . .
RUN npm i

ENV VITE_HOST="0.0.0.0"
ENV VITE_PORT="9000"
EXPOSE  ${VITE_PORT}

CMD npm run start
