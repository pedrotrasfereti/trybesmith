import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const { DATABASE_URL } = process.env;

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URL,
    },
  },
});

export default prisma;
