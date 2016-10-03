const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');

const server = new Hapi.Server();

server.connection({
  port: 9000
});

server.register([
  Inert,
  Vision,
  {
    register: HapiSwagger,
    options: {
      info: {
        title: 'Test App',
        version: '1.0.0'
      },
      documentationPath: '/docs'
    }
  }
]);

server.route([
  {
    path: '/route1',
    method: 'GET',
    handler: (request, reply) => {
      return reply('ok');
    },
    config: {
      tags: ['api']
    }
  }
]);


server.start((err) => {
  if(err) {
    console.log(err);
  }
  console.log('server running at: ' + server.info.uri);
});
