// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth"
import AppleProvider from "next-auth/providers/apple"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"

export default NextAuth({
  // secret: process.env.SECRET,
  session:{
    jwt:true
  },
  providers: [
    
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // Sign in with passwordless email link
   
  ],
  pages:{
    signIn: "./login"
  },

  database: process.env.DATEBASE_URL
})