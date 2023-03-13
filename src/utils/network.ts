import axios from 'axios';

import { ENDPOINTS } from 'src/constants/api';
import { CLIENT_URL } from 'src/constants/env';
import { Task } from 'src/types';

const makeRequest = async <T>(
  baseURL: string,
  url: string,
  method: 'POST' | 'PUT' | 'GET',
  data?: T
) => {
  try {
    const response = await axios.request({
      url,
      data,
      baseURL,
      method,
    });

    return response.data;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const addProduct = async (data: Task) => {
  const { message } = await makeRequest<Task>(
    CLIENT_URL,
    ENDPOINTS.API_PRODUCT_ADD,
    'POST',
    data
  );

  if (message === 'successfully') {
    return {
      status: 'successfully',
    };
  }

  return {
    status: 'failure',
  };
};

export const updateProduct = async (data: Task) => {
  const { message } = await makeRequest<Task>(
    CLIENT_URL,
    ENDPOINTS.API_PRODUCT_UPDATE,
    'PUT',
    data
  );

  if (message === 'successfully') {
    return {
      status: 'successfully',
    };
  }

  return {
    status: 'failure',
  };
};
