'use client';

import { signIn } from 'next-auth/react';
import useTranslation from '@/hooks/useTranslation';

export default function SignWithGoogleButton() {
  const { translate } = useTranslation();
  return (
    <button
      className='border p-2'
      onClick={() =>
        signIn('google', {
          callbackUrl: `${window.location.origin}/`,
        })
      }
    >
      {translate('sign_with_google')}
    </button>
  );
}
