import { SwaggerOptions } from '@fastify/swagger';

import { description, name, version } from 'package.json';

import { PUBLIC_ENV } from 'src/constants/env';

export const swaggerConfig: SwaggerOptions = {
  mode: 'dynamic',
  routePrefix: '/swagger',
  openapi: {
    info: {
      title: name,
      description,
      version,
    },
    tags: [
      { name: 'access', description: 'Access endpoints' },
      { name: 'core', description: 'Core endpoints' },
      // { name: 'user', description: 'User related endpoints' },
    ],
  },
  exposeRoute: PUBLIC_ENV === 'local',
};
