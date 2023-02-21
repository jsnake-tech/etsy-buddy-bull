import axios from 'axios';

import { ENDPOINTS } from 'src/constants/api';
import { CLIENT_URL } from 'src/constants/env';
import { Task } from 'src/types';

export const makeRequest = async <T>(
  baseURL: string,
  url: string,
  method: 'POST' | 'PUT' | 'GET',
  data?: T
) =>
  await axios.request({
    url,
    data,
    baseURL,
    method,
  });

export const addProduct = async (data: Task) =>
  await makeRequest<Task>(CLIENT_URL, ENDPOINTS.API_PRODUCT_ADD, 'POST', data);

export const updateProduct = async (data: Task) =>
  await makeRequest<Task>(
    CLIENT_URL,
    ENDPOINTS.API_PRODUCT_UPDATE,
    'PUT',
    data
  );
