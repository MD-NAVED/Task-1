
import NextAuth from 'next-auth'

// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from "next-auth/providers/github";

export const authOptions = NextAuth({
    providers: [
        GitHubProvider({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET
        })
      ]
})

export {authOptions as GET , authOptions as POST, }