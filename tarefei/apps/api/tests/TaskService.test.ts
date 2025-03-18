import { describe, jest } from '@jest/globals';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

jest.mock('@prisma/client', () => {
  return {
    PrismaClient: jest.fn().mockImplementation(() => ({
      tasks: {
        create: jest.fn(),
      },
    })),
  };
});

describe('General tests for Task Service', () => {
  
});
