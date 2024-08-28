'use client';

import { signIn } from 'next-auth/react';
import useTranslation from '@/hooks/useTranslation';

export default function SignDevAdminButton() {
  const { translate } = useTranslation();
  return (
    <button
      className='border p-2'
      onClick={async () => await signIn('credentials')}
    >
      {translate('sign_dev_admin')}
    </button>
  );
}
