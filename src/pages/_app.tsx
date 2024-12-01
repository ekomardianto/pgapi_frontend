import Navbar from "@/components/fragments/navbar";
import Toaster from "@/components/ui/toaster";
import "../styles/globals.css";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadingPage from "@/components/ui/loadingPage";
import { CsrfProvider } from "@/context/CsrfContext";

const disabledNavbar = [
  "auth",
  "sa",
  "admin",
  "member",
  "kasir",
  "keuangankps",
  "personalia",
  "mgmkebun",
];

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { pathname } = useRouter();
  const [toaster, setToaster] = useState<any>({});
  // const [loading, setLoading] = useState(false)
  const [loadingPage, setLoadingPage] = useState(false);
  const router = useRouter();
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });
    if (Object.keys(toaster).length > 0) {
      setTimeout(() => {
        setToaster({});
      }, 3600);
    }
    const handleStart = (url: string) => {
      // console.log(`Loading: ${url}`);
      setLoadingPage(true);
    };
    const handleComplete = (url: string) => {
      // console.log(`Finished loading: ${url}`);
      setLoadingPage(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [toaster, router]);
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_GRECAPTCHA_SITE_KEY || ""}
    >
      <SessionProvider session={session}>
        <CsrfProvider>
          <div>
            {loadingPage && <LoadingPage />}
            {!disabledNavbar.includes(pathname.split("/")[1]) && <Navbar />}
            <Component
              {...pageProps}
              setToaster={setToaster}
              setLoadingPage={setLoadingPage}
            />
            {Object.keys(toaster).length > 0 && (
              <Toaster
                variant={toaster.variant}
                message={toaster.message}
                setToaster={setToaster}
              />
            )}
          </div>
        </CsrfProvider>
      </SessionProvider>
    </GoogleReCaptchaProvider>
  );
}
