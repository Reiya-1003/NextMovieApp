import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";



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
          response_type: "code",
        },
      },
    }),
    GitHubProvider({
      clientId: "Iv1.deb2b4d5483aedfb",
      clientSecret: "90436a6d97e8edf2108633e2bc02a95552fc5df5"
    }),
    // ...add more providers here
  ],

  
  jwt: {
    encryption: true,
  },
  secret: "E/QjdtprR8TBD/NEk5nVAidWlddovmMdtRDLZcJqWF8=",
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
    redirect: async (url, baseurl) => {
      if (url === "/profile") {
        return Promise.resolve("/");
      }
      return Promise.resolve("/");
    },
  },
});
