import { FastifyInstance } from 'fastify';

import { enums } from 'src/schemas/enums';
import { errors } from 'src/schemas/errors';

export const schemas = (fastify: FastifyInstance) => {
  fastify.addSchema(enums);
  fastify.addSchema(errors);
};
