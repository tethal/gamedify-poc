import { notFound } from 'next/navigation';
import { Prisma } from '@prisma/client';

export function isCodeValid(code: string): boolean {
  return /^[0-9]{4,8}$/.test(code);
}

export function ensureNumber(id: string) {
  if (!/^[0-9]+$/.test(id)) {
    notFound();
  }
  return Number.parseInt(id);
}

export async function simulateLatency(ms: number = 1500) {
  if (process.env.SIMULATE_LATENCY === 'true') {
    // TODO: remove artificial delay to simulate network latency
    await new Promise(resolve => setTimeout(resolve, ms));
  }
}

export function convertDbError(e: any) {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    if (e.code === 'P2002') {
      return { error: 'Code must be unique' };
    }
  }
  return { error: 'Database error' };
}
