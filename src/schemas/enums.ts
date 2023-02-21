import { JSONSchema4 } from 'json-schema';

export const enums: JSONSchema4 = {
  $id: 'enums',
  type: 'object',
  title: 'enums',
  required: ['environment', 'mode', 'when', 'counterType'],
  properties: {
    environment: {
      title: 'EnumsEnvironment',
      type: 'string',
      enum: ['local', 'staging', 'production'],
    },
    mode: {
      title: 'EnumsMode',
      type: 'string',
      enum: ['production', 'development', 'undefined'],
    },
  },
  additionalProperties: false,
};
