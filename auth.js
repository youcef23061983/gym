//////////////////////////// uncontrolled auto next-auth v5:

// import NextAuth from "next-auth";
// import GitHubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import FacebookProvider from "next-auth/providers/facebook";

// export const { handlers, auth, signIn, signOut } = NextAuth({
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID || "",
//       clientSecret: process.env.GITHUB_SECRET || "",
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID || "",
//       clientSecret: process.env.GOOGLE_SECRET || "",
//     }),
//     FacebookProvider({
//       clientId: process.env.FACEBOOK_ID || "",
//       clientSecret: process.env.FACEBOOK_SECRET || "",
//     }),
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "email:", type: "text", placeholder: "your-email" },
//         password: {
//           label: "password:",
//           type: "password",
//           placeholder: "your-password",
//         },
//       },
//       async authorize(credentials) {
//         // This is your demo user - replace with actual database check
//         const user = {
//           id: "42",
//           name: "dave",
//           email: "dave@gmail.com",
//           password: "nextauth",
//           role: "user",
//         };

//         if (
//           credentials?.email === user.email &&
//           credentials?.password === user.password
//         ) {
//           return {
//             id: user.id,
//             name: user.name,
//             email: user.email,
//             role: user.role,
//           };
//         }
//         return null;
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.role = user.role;
//         token.id = user.id;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (session?.user) {
//         session.user.role = token.role;
//         session.user.id = token.id;
//       }
//       return session;
//     },
//   },

//   session: {
//     strategy: "jwt",
//     maxAge: 30 * 24 * 60 * 60, // 30 days
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   trustHost: true,
//   debug: process.env.NODE_ENV === "development",
// });

////////////////////////////////// controlled next-auth v5:
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";

import db from "./lib/db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),

  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_ID || "",
      clientSecret: process.env.FACEBOOK_SECRET || "",
    }),

    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;

        if (
          typeof email !== "string" ||
          typeof password !== "string" ||
          !email.trim() ||
          !password
        ) {
          return null;
        }

        const user = await db.user.findUnique({
          where: {
            email: email.trim().toLowerCase(),
          },
        });

        if (!user?.password) {
          return null;
        }

        const passwordIsValid = await bcrypt.compare(password, user.password);

        if (!passwordIsValid) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          role: user.role,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role ?? "user";
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role ?? "user";
      }

      return session;
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },

  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true,
  debug: process.env.NODE_ENV === "development",
});
