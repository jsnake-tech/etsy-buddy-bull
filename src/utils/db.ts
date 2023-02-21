import { REDIS_HOST, REDIS_PORT } from 'src/constants/env';

export type ConnectionOptions = {
  host: string;
  port: number;
};

export const connectionsOptions = {
  port: REDIS_PORT,
  host: REDIS_HOST,
  tls: false,
} as ConnectionOptions;
