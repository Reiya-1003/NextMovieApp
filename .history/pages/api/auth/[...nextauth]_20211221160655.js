import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "504362852305-56vu3hheb4rktp4huip11pbpmmonhl8e.apps.googleusercontent.com",
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
})