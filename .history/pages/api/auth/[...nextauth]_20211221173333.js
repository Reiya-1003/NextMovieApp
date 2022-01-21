import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'


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
    // ...add more providers here
    
  ],
  jwt: {
    encryption:true,
  },
  secret:process.env.secret,
  callbacks:{
    async jwt(token,account){
      if(account?.accessToken){
        token.accessToken = account.accessToken;
      }
      return token;
    },
    redirect: async(url,baseurl)=>{
      if(url === "/profile"){
        return Promise.resolve("/")
      }
      return Promise.resolve("/")
    }
  }
})