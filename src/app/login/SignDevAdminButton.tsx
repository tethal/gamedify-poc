'use client';

import { signIn } from 'next-auth/react';
import useTranslation from '@/hooks/useTranslation';
import Button from '@/components/Button';

export default function SignDevAdminButton() {
  const { translate } = useTranslation();
  return (
    <Button onClick={async () => await signIn('credentials')}>
      {translate('sign_dev_admin')}
    </Button>
  );
}
