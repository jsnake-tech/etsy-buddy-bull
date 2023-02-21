import cookie from '@fastify/cookie';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import fastifyRedis from '@fastify/redis';
import swagger from '@fastify/swagger';
import { FastifyInstance } from 'fastify';
import extractor from 'fastify-extract-definitions';

import { bullBoardConfig, fastifyBullBoard } from 'src/plugins/bullBoard';
import { corsConfig } from 'src/plugins/cors';
import { extractorConfig } from 'src/plugins/extractor';
import { helmetConfig } from 'src/plugins/helmet';
import { redisClient } from 'src/plugins/redis';
import { swaggerConfig } from 'src/plugins/swagger';

export const plugins = (fastify: FastifyInstance) => {
  fastify.register(extractor, extractorConfig);
  fastify.register(swagger, swaggerConfig);

  fastify.register(helmet, helmetConfig);
  fastify.register(cors, corsConfig);

  fastify.register(fastifyRedis, { client: redisClient });

  fastify.register(fastifyBullBoard, bullBoardConfig);

  fastify.register(cookie);
};
