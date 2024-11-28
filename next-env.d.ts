/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/pages/building-your-application/configuring/typescript for more information.
// env.d.ts
namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_BACKEND_API_BASEURL?: string;
    NEXT_PUBLIC_URL_PARAM_ENCRYPT_KEY?: string;
    NEXT_PUBLIC_URL_ENCRYPT_KEY?: string;
    BACKEND_API_BASEURL?: string;
    FRONTEND_URL?: string;
    NEXTAUTH_SECRET?: string;
  }
}
