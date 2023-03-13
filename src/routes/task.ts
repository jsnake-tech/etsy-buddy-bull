import { RouteShorthandOptions } from 'fastify';

import { Handler, TaskPost } from 'src/_generated';
import { queue } from 'src/producers/task';
import { setDataIntoRedis } from 'src/storage/db';
import { Task } from 'src/types';
import { addProduct } from 'src/utils/network';

export const options: RouteShorthandOptions = {
  schema: {
    description: 'Task',
    tags: ['Task'],
    body: {
      type: 'object',
      required: ['limit', 'taskId', 'userId'],
      properties: {
        userId: { type: 'string' },
        limit: { type: 'number' },
        taskId: { type: 'string' },
      },
    },
    response: {
      200: {
        type: 'object',
        required: ['message'],
        properties: {
          message: { type: 'string' },
        },
        additionalProperties: false,
      },
    },
  },
  preHandler: [],
};

export const handler: Handler<TaskPost> = async (request, reply) => {
  const { taskId, limit, userId } = request.body;

  const { status } = await addProduct({ taskId });

  if (status === 'successfully') {
    const queueID = `task_${userId}_${taskId}`;

    const jobsIds: string[] = [];

    const { id } = await queue.job<Task>({ taskId }, limit - 1);

    if (id) {
      jobsIds.push(id);
    }

    await setDataIntoRedis(queueID, jobsIds);
  }

  reply.send({
    message: 'success',
  });
};
