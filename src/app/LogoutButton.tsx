'use client';

import { signOut } from 'next-auth/react';
import useTranslation from '@/hooks/useTranslation';
import Button from '@/components/Button';

export default function LogoutButton() {
  const { translate } = useTranslation();
  return (
    <Button
      onClick={() =>
        signOut({
          callbackUrl: `${window.location.origin}/`,
        })
      }
    >
      {translate('logout')}
    </Button>
  );
}
