import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
}

export default (req:any, res:any) => NextAuth(req, res, options)