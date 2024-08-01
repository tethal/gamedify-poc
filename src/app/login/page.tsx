import { getServerSession } from 'next-auth';
import SignWithGoogleButton from './SignWithGoogleButton';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import SignDevAdminButton from '@/app/login/SignDevAdminButton';

export default async function AuthRoute() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect('/');
  }
  return (
    <>
      <SignWithGoogleButton />
      {process.env.DEV_AUTH === 'true' && <SignDevAdminButton />}
    </>
  );
}
