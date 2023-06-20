import type { Config } from '@jest/types';
import lint from './jest-eslint.config';
import test from './jest-test.config';

const config: Config.InitialOptions = {
  projects: [lint, test],
  collectCoverageFrom: ['./src/**/**.ts'],
  verbose: true,
};

export default config;
