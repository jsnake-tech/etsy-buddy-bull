import { EnumsEnvironment } from 'src/_generated';

export const PUBLIC_ENV = process.env.PUBLIC_ENV as EnumsEnvironment;

const configs: Record<
  EnumsEnvironment,
  {
    API_HOST: string;
    CLIENT_URL: string;
  }
> = {
  local: {
    API_HOST: 'localhost',
    CLIENT_URL: 'http://localhost:8000',
  },
  staging: {
    API_HOST: 'dev.bull.etsybuddy',
    CLIENT_URL: 'dev.api.etsybuddy.com',
  },
  production: {
    API_HOST: 'bull.etsybuddy',
    CLIENT_URL: 'api.etsybuddy.com',
  },
};

export const { CLIENT_URL } = configs[PUBLIC_ENV];

export const ORIGIN = Object.values(configs).map(
  ({ CLIENT_URL }) => CLIENT_URL
);

export const REDIS_HOST = process.env.BACKEND_REDIS_HOST || '';
export const REDIS_URL = process.env.BACKEND_REDIS_URL || '';
export const REDIS_PORT = Number(process.env.BACKEND_REDIS_PORT || 6379);

export const BODY_LIMIT = 20971520; // 20mb
export const PORT = Number(process.env.BACKEND_PORT || 5000);
