'use client';

import { signIn } from 'next-auth/react';
import useTranslation from '@/hooks/useTranslation';
import Button from '@/components/Button';


export default function SignWithGoogleButton() {
  const { translate } = useTranslation();
  return (
    <Button
      onClick={() =>
        signIn('google', {
          callbackUrl: `${window.location.origin}/`,
        })
      }
    >
      {translate('sign_with_google')}
    </Button>
  );
}
