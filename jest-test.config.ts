import type { Config } from '@jest/types';

const config: Config.InitialProjectOptions = {
  displayName: 'test',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/__tests__/**/*.test.ts'],
};

export default config;
