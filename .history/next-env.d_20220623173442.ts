/// <reference types="next" />
/// <reference types="next/image-types/global" />
import NextAuth from "next-auth"
// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
      user: {
        /** The user's postal address. */
        id: string
      }
    }
  }