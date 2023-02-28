import { Job } from 'bullmq';

import { Task } from 'src/types';
import { connectionsOptions } from 'src/utils/db';
import { addProduct, updateProduct } from 'src/utils/network';
import { createWorker } from 'src/workers/factory';

const handler = async ({ data, opts }: Job<Task>) => {
  if (Number(opts.repeat?.count) > 1) {
    await updateProduct(data);
  } else {
    await addProduct(data);
  }
};

export const worker = () => createWorker('TASK', handler, connectionsOptions);
