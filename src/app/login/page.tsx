import { getServerSession } from 'next-auth';
import SignWithGoogleButton from './SignWithGoogleButton';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function AuthRoute() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect('/');
  }
  return (
    <>
      <SignWithGoogleButton />
    </>
  );
}
