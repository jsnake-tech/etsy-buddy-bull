import { RouteShorthandOptions } from 'fastify';

import { version } from 'package.json';

import { EnumsMode, Handler, RootGet } from 'src/_generated';
import { PUBLIC_ENV } from 'src/constants/env';

export const options: RouteShorthandOptions = {
  schema: {
    description: 'Get API status',
    tags: ['core'],
    response: {
      200: {
        type: 'object',
        required: ['environment', 'mode', 'version'],
        properties: {
          environment: { $ref: 'enums#/properties/environment' },
          mode: { $ref: 'enums#/properties/mode' },
          version: { type: 'string' },
        },
        additionalProperties: false,
      },
    },
  },
  preHandler: [],
};

export const handler: Handler<RootGet> = (request, reply) => {
  reply.send({
    environment: PUBLIC_ENV,
    mode: (process.env.NODE_ENV as EnumsMode) || 'undefined',
    version,
  });
};
