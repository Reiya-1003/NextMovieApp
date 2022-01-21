// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth"
import AppleProvider from "next-auth/providers/apple"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"

export default NextAuth({
  site: process.env.NEXTAUTH_URL,
  session:{
    jwt:true
  },
  providers: [
    
    GoogleProvider({
      clientId: "504362852305-56vu3hheb4rktp4huip11pbpmmonhl8e.apps.googleusercontent.com",
      clientSecret: "504362852305-56vu3hheb4rktp4huip11pbpmmonhl8e.apps.googleusercontent.com",
      
    }),
    // Sign in with passwordless email link
    
   
  ],
  pages:{
    signIn: "./login"
  },
  

  database: process.env.DATEBASE_URL
})