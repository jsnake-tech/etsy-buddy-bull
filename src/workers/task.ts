import { Job } from 'bullmq';

import { Task } from 'src/types';
import { connectionsOptions } from 'src/utils/db';
import { updateProduct } from 'src/utils/network';
import { createWorker } from 'src/workers/factory';

const handler = async ({ data }: Job<Task>) => {
  await updateProduct(data);
};

export const worker = () => createWorker('TASK', handler, connectionsOptions);
