import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import LogoutButton from './LogoutButton';
import SignWithGoogleButton from '@/app/login/SignWithGoogleButton';
import SignDevAdminButton from '@/app/login/SignDevAdminButton';

export default async function Avatar() {
  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <>
        <LogoutButton />
      </>
    );
  } else {
    return (
      <>
        <SignWithGoogleButton />
        {process.env.DEV_AUTH === 'true' && <SignDevAdminButton />}
      </>
    );
  }
}
