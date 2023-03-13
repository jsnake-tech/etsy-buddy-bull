import { Queue, QueueScheduler } from 'bullmq';

import { ConnectionOptions } from 'src/utils/db';

export const createQueue = (name: string, connection: ConnectionOptions) => {
  const queue = new Queue(name, { connection });

  const scheduler = new QueueScheduler(name, {
    connection,
  });

  const job = async <T>(data: T, limit: number) =>
    await queue.add(name, data, {
      repeat: { pattern: '0 23 * * *', limit },
    });

  return { queue, job, scheduler };
};
