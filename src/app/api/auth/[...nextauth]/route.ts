import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

const configNextAuth = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
    ], // rest of your config
} satisfies NextAuthOptions;

const handler = NextAuth(configNextAuth);

export { handler as GET, handler as POST }