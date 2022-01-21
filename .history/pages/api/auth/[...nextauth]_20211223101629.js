import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'
import TwitterProvider from "next-auth/providers/twitter";


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "504362852305-56vu3hheb4rktp4huip11pbpmmonhl8e.apps.googleusercontent.com",
      clientSecret: "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",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    TwitterProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET
    })
    // ...add more providers here
    
  ],
  jwt: {
    encryption:true,
  },
  secret:process.env.secret,
  callbacks:{
    jwt: async ({ token, user }) => {
      user && (token.user = user)
      return token
  },
  session: async ({ session, token }) => {
    session.user = token.user
    return session
},
    redirect: async(url,baseurl)=>{
      if(url === "/profile"){
        return Promise.resolve("/")
      }
      return Promise.resolve("/")
    }
  }
})