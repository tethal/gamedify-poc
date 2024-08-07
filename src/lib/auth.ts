import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from './db';
import { Adapter } from 'next-auth/adapters';
import Credentials from 'next-auth/providers/credentials';

const getProviders = () => {
  const google = GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  });
  if (process.env.DEV_AUTH === 'true') {
    return [
      google,
      Credentials({
        credentials: {},
        authorize: async credentials => {
          if (process.env.DEV_AUTH === 'true') {
            return {
              id: 'dev_admin',
              name: 'DEV Admin',
              email: 'admin@admin.admin',
              image: '',
              role: 'admin',
            };
          }
          throw new Error('User not found.');
        },
      }),
    ];
  }

  return [google];
};

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  session: {
    strategy: 'jwt',
  },
  providers: getProviders(),
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
        token.userRole = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.userId;
      session.user.role = token.userRole;
      return session;
    },
  },
};
