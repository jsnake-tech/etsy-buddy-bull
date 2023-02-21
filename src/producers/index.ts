import { queue as task } from 'src/producers/task';

export const producers = [task.queue];
