import { createBullBoard as createBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { FastifyAdapter } from '@bull-board/fastify';
import { FastifyRegisterOptions } from 'fastify';

import { producers } from 'src/producers';

const path = '/admin/queues';

const serverAdapter = new FastifyAdapter();

serverAdapter.setBasePath(path);

export const fastifyBullBoard = serverAdapter.registerPlugin();

export const bullBoardConfig = {
  prefix: path,
} as FastifyRegisterOptions<any>;

createBoard({
  queues: producers.map((queue) => new BullMQAdapter(queue)),
  serverAdapter,
});
