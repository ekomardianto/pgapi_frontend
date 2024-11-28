import axios from "axios";
import { error } from "console";
import { getSession, signOut } from "next-auth/react";
import { config } from "process";
import { Session } from "next-auth";
import { decode } from "jsonwebtoken";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}
const header = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Cache-Control": "no-cache",
  Expires: "0",
};

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_BASEURL,
  headers: header,
  timeout: 60000,
});

instance.interceptors.response.use(
  async (config) => {
    const session = await getSession();

    if (session) {
      const token = session?.accessToken;
      if (token) {
        const tokenDecode = decode(token);
        if (tokenDecode) {
          if (typeof tokenDecode !== "string") {
            const expToken = tokenDecode.exp || 0;
            const unixNow = Math.floor(Date.now() / 1000);
            if (unixNow > expToken) {
              // console.log('Token expired');
              await signOut();
            }
          }
        }
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.request.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      signOut();
    }
    return Promise.reject(error);
  }
);

export default instance;
