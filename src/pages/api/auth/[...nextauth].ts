import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

type Credentials = {
  username: string;
  password: string;
};

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      // @ts-ignore
      async authorize(credentials) {
        const { username, password } = credentials as Credentials;
        try {
          const response = await axios.post("http://localhost:3001/login", {
            username,
            password,
          });
          const user = response.data[0]
          if (response.data && response.data.length > 0) {
            return user.data[0];
          } else {
            return null;
          }
        } catch (e) {
          return `Error ${e}`;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);


