const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: [
    'given2/setup', //
    '<rootDir>/jest.setup.js',
  ],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/containers/(.*)$': '<rootDir>/src/containers/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/(.*)$': '<rootDir>/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  // ❓ THINK-GYU:  SSR 부분을 테스트해야하는지?, page 컴포넌트에서 E2E 테스트를 jest 로 할지 cypress 로 할지.. 고민
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/styles/*', '!src/pages/**/*'], // coverage all file
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
