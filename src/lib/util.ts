import { notFound } from 'next/navigation';

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
  // TODO: remove artificial delay to simulate network latency
  await new Promise(resolve => setTimeout(resolve, ms));
}
