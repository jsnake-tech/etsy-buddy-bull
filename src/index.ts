import 'src/plugins/env';

import Fastify from 'fastify';

import { version } from 'package.json';

import { BODY_LIMIT, PORT, PUBLIC_ENV } from 'src/constants/env';
import { plugins } from 'src/plugins';
import { routes } from 'src/routes';
import { schemas } from 'src/schemas';

const fastify = Fastify({
  logger: PUBLIC_ENV === 'local',
  bodyLimit: BODY_LIMIT,
  ajv: {
    customOptions: { coerceTypes: false },
  },
});

plugins(fastify);
schemas(fastify);
routes(fastify);

fastify.addHook('onError', (request, reply, error, done) => {
  done();
});

fastify.listen({ host: '0.0.0.0', port: PORT }, async (error, address) => {
  if (error) {
    fastify.log.error(error);
    process.exit(1);
  }

  fastify.swagger();

  console.log(`🚀 Server ${version} ready at: ${address}`);
});
