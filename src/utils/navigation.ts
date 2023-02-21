import { FastifyInstance, HTTPMethods, RouteShorthandOptions } from 'fastify';

import { Handler } from 'src/_generated';

type EndpointConfig = {
  options: RouteShorthandOptions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handler: Handler<any>;
};
type Routes = Record<string, Partial<Record<HTTPMethods, EndpointConfig>>>;

export const router = (routes: Routes) => (fastify: FastifyInstance) =>
  fastify.register(async (fastify) => {
    Object.entries(routes).forEach(([url, config]) => {
      Object.entries(config).forEach(([_method, { options, handler }]) => {
        const method = _method as HTTPMethods;
        fastify.route({ ...options, method, url, handler });
      });
    });
  });
