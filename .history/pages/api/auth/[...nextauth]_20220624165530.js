import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from "next-auth/providers/github";

const secret=process.env.Secret


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET
    })
    // ...add more providers here
    
  ],
  jwt: {
    encryption:true,
  },
 
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