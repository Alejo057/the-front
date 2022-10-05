import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

const options: any = {
    providers: [
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        })
    ],
    callbacks: {
        // @ts-ignore
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token;
            }
            return token
        },

        // @ts-ignore
        async session({ session, user, token }) {
            if (token) {
                session.accessToken = token.accessToken
            }
            return session
        }
    },
}


export default NextAuth(options);