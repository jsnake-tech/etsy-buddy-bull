import { redisClient } from 'src/plugins/redis';

export const getDataFromRedis = async (filter: string) => {
  const data = await redisClient.get(filter);

  return data ? JSON.parse(data) : undefined;
};

export const setDataIntoRedis = async <T>(key: string, value: T) =>
  await redisClient.set(key, JSON.stringify(value));
