// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: ['<rootDir>/__tests__/**/**/*.test.ts'],
  moduleDirectories: ['node_modules', 'src'],
  collectCoverage: true,
};
