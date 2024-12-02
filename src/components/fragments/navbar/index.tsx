import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.scss";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import LogoutIcon from "@mui/icons-material/Logout";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Link from "next/link";
import Tooltips from "@/components/ui/tooltips";
import { SettingsInputCompositeTwoTone } from "@mui/icons-material";
import { useState } from "react";

const Navbar = () => {
  const { data }: any = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // ambil role userSession
  const role = data?.user?.role;
  const name = data?.user?.name;
  const handleClick = async () => {
    setIsLoading(true);
    if (data) {
      await signOut({
        callbackUrl: process.env.NEXTAUTH_URL,
      });
      setIsLoading(false);
    } else {
      await signIn();
      setIsLoading(false);
    }
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__kiri}>
        <Link className={styles.navbar__kiri__logo} href="/">
          <span className={styles.navbar__kiri__logo__kiri}>Kujual</span>
          <span className={styles.navbar__kiri__logo__kanan}>id</span>
        </Link>
      </div>
      <div className={styles.navbar__tengah}></div>
      <div className={styles.navbar__kanan}>
        <div className={styles.navbar__kanan__panel}>
          {data ? (
            <>
              <div className={styles.navbar__kanan__panel__nama}>
                Hi, {name}
              </div>
              <Tooltips
                text="Klik untuk masuk ke Halaman Admin"
                position="left"
              >
                <Link
                  className={styles.navbar__kanan__panel__panelbutton}
                  href={
                    role === "member"
                      ? "/member"
                      : role === "admin"
                      ? "/admin"
                      : role === "kasir"
                      ? "/kasir"
                      : role === "keuangankps"
                      ? "/keuangankps"
                      : role === "personalia"
                      ? "/personalia"
                      : role === "mgmkebun"
                      ? "/mgmkebun"
                      : "/sa"
                  }
                >
                  <AutoAwesomeMosaicIcon
                    className={styles.navbar__kanan__panelbutton__icon}
                  />
                </Link>
              </Tooltips>
            </>
          ) : (
            ""
          )}
        </div>
        <button
          className={styles.navbar__kanan__button}
          onClick={handleClick}
          disabled={isLoading}
        >
          {isLoading ? (
            <div
              className="box-loader"
              style={{ width: "15px", height: "10px" }}
            >
              <div className="loader" />
            </div>
          ) : data ? (
            <LogoutIcon className={styles.navbar__kanan__button__iconnav} />
          ) : (
            <LockOpenIcon className={styles.navbar__kanan__button__iconnav} />
          )}
          {data ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};
export default Navbar;
