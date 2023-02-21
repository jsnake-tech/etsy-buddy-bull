export const ENDPOINTS = {
  API_PRODUCT_ADD: '/product/add',
  API_PRODUCT_UPDATE: '/product/update',
} as const;

export type Endpoints = typeof ENDPOINTS;
