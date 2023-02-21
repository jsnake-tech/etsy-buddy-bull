import { FastifyRedisPluginOptions } from '@fastify/redis';
import Redis from 'ioredis';

import { REDIS_HOST, REDIS_PORT, REDIS_URL } from 'src/constants/env';

export const redisConfig: FastifyRedisPluginOptions = {
  host: REDIS_HOST,
  port: REDIS_PORT,
  url: REDIS_URL,
};

export const redisClient = new Redis(redisConfig);
