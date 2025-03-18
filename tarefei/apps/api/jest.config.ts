
export default {
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/@types/*.ts',
    '!src/**/config/*.ts',
  ],
  preset: 'ts-jest',
  moduleFileExtensions: ["ts", "js", "json"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/src/server.ts"
  ],
}