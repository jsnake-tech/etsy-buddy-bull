import { ExtractorOptions } from 'fastify-extract-definitions';

import { PUBLIC_ENV } from 'src/constants/env';

export const extractorConfig: ExtractorOptions = {
  enabled: PUBLIC_ENV === 'local',
  ignoreHead: true,
  outputs: {
    './src/_generated.ts': {
      target: 'serverTypes',
    },
  },
  compilerOptions: {
    style: {
      singleQuote: true,
      bracketSpacing: true,
      printWidth: 80,
      trailingComma: 'es5',
    },
    unreachableDefinitions: true,
  },
};
