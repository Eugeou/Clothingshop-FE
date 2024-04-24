import axios from "@/lib/axios";
import NextAuth, { AuthOptions } from "next-auth"

import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
    //Configure one or more authentication provider
    providers: [
        CredentialsProvider ({
            name: "Credentials",

            credentials: {
                username: {label: "Username", type: "text", placeholder: "Username or email"},
                password: {label: "Password", type: "password"},
            },

            async authorize(credentials, req) {
                //Add logic here to look up the user from credentials supplied

                const res = await axios.post("/auth/login", {
                    username: credentials?.username,
                    password: credentials?.password,
                });

                const user = res.data;

                if (user) {
                    // Any object returned will be saved in 'user' property of jwt
                    return user;
                } else {

                    // If you return null then an error will be displayed advising the user to check their details
                    return null;
                }
            },
        }),

    ],

    callbacks: {
        async jwt({ token, user, account }) {
            console.log({ account });
            return {...token, ...user};
        },

        async session ({ session, token, user }) {
            session.user = token as any;
            return session;
        },
    },

    pages: {
        signIn: "/auth/login"
    }
};

export default NextAuth(authOptions);