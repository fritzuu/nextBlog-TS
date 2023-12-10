import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import NextAuth from "next-auth/next";

const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: "Iv1.48955eaf95f32593",
      clientSecret: "6f1045430e01320367a125976528222f8bfbd5c7",
    }),
  ],
  callbacks: {
    async session({ session, token }: any) {
      session.user.name = `${session?.user?.name}_${token?.sub}`;

      return session;
    },
  },
  secret: "default_secret_key",
};

const nextAuth = NextAuth(authOptions);

export { nextAuth as GET, nextAuth as POST };