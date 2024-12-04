import { decrypt } from "@/utils/secureUrl";
import { decode } from "jsonwebtoken";
import { getToken } from "next-auth/jwt";
import { headers } from "next/headers";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";
import { hostname } from "os";

const onlySa = ["sa"];
const onlyAdmin = ["admin"];
const onlyKasir = ["kasir"];
const keuanganKPS = ["keuangankps"];
const onlyPersonalia = ["personalia"];
const onlyMgmkebun = ["mgmkebun"];
const authPage = ["auth"];

export default function WithAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = []
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    // const pathname = decrypt(req.nextUrl.pathname.split('/')[1])
    const pathname = req.nextUrl.pathname.split("/")[1];
    const token: any = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });
    // console.log("host name", req.nextUrl);
    if (requireAuth.includes(pathname)) {
      if (!token && !authPage.includes(pathname)) {
        const url = new URL("/auth/login", process.env.NEXTAUTH_URL || req.url);
        const callbacuri = process.env.NEXTAUTH_URL + req.nextUrl.pathname;
        url.searchParams.set("callbackUrl", encodeURI(callbacuri));
        NextResponse.next().headers.set(
          "Cache-Control",
          "no-store, no-cache, must-revalidate, proxy-revalidate"
        );
        return NextResponse.redirect(url);
      }
      if (token) {
        if (authPage.includes(pathname)) {
          return NextResponse.redirect(new URL("/", req.url));
        }
        // Pada Bagian ini bisa melakukan filter terhadap role user ***
        if (token.role !== "admin" && onlyAdmin.includes(pathname)) {
          return NextResponse.redirect(new URL("/", req.url));
        }
        if (token.role !== "kasir" && onlyKasir.includes(pathname)) {
          return NextResponse.redirect(new URL("/", req.url));
        }
        if (token.role !== "sa" && onlySa.includes(pathname)) {
          return NextResponse.redirect(new URL("/", req.url));
        }
        if (token.role !== "keuangankps" && keuanganKPS.includes(pathname)) {
          return NextResponse.redirect(new URL("/", req.url));
        }
        if (token.role !== "personalia" && onlyPersonalia.includes(pathname)) {
          return NextResponse.redirect(new URL("/", req.url));
        }
        if (token.role !== "mgmkebun" && onlyMgmkebun.includes(pathname)) {
          return NextResponse.redirect(new URL("/", req.url));
        }
        // **** end of filter ***
        const tokenDecode = decode(token.accessToken);
        if (tokenDecode) {
          if (typeof tokenDecode !== "string") {
            const expToken = tokenDecode.exp || 0;
            const unixNow = Math.floor(Date.now() / 1000);
            if (unixNow > expToken) {
              return NextResponse.redirect(
                new URL("/expired/tokenexpired", req.url)
              );
            }
          }
        }
      }
    }
    return middleware(req, next);
  };
}
