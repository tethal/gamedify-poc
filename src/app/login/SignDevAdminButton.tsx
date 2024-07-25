'use client';

import { signIn } from 'next-auth/react';

export default function SignDevAdminButton() {
  return (
    <button
      className='border p-2'
      onClick={async () => await signIn('credentials')}
    >
      Sign in DEV Admin
    </button>
  );
}
