import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: false,
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  testEnvironment: 'node',
  projects: ['./database', './src'],
};
export default config;
