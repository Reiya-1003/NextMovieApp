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
      clientId: "504362852305-56vu3hheb4rktp4huip11pbpmmonhl8e.apps.googleusercontent.com",
      clientSecret: "504362852305-56vu3hheb4rktp4huip11pbpmmonhl8e.apps.googleusercontent.com",
      
    }),
    // Sign in with passwordless email link
    signIn("credentials", {
      redirect: false, 
      email: "test",
      password: "test",
    })
    .then((error) => console.log(error))
    .catch((error) => console.log(error))
   
  ],
  pages:{
    signIn: "./login"
  },

  database: process.env.DATEBASE_URL
})