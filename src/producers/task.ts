import { createQueue } from 'src/producers/factory';
import { connectionsOptions } from 'src/utils/db';
import { workers } from 'src/workers';

export const queue = createQueue('TASK', connectionsOptions);

workers.taskWorker();
