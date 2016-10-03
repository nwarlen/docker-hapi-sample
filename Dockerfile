FROM node:6

EXPOSE 9000

ADD app/ /var/org/docker-hapi-sample
WORKDIR /var/org/docker-hapi-sample

RUN apt-get update
RUN npm install --production

CMD ["node", "server.js"]
