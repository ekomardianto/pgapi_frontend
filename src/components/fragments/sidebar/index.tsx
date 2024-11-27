import { useRouter } from "next/router";
import styles from "./Sidebar.module.scss";
import Link from "next/link";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
type Proptypes = {
  list: Array<{
    title: string;
    url: string;
    ref: string;
    icon: string;
    li?: Array<{
      title: string;
      url: string;
      ref: string;
      icon: string;
    }>;
  }>;
};
const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};
const Sidebar = (props: Proptypes) => {
  const isMobile = useIsMobile();
  const { list } = props;
  const { pathname } = useRouter();
  const { data }: any = useSession();
  const [klikMenu, setKlikMenu] = useState<{ [key: string]: boolean }>({});
  const [isLoading, setIsLoading] = useState(false);

  // Membagi pathname menjadi bagian-bagian terpisah dengan pemisah "/"
  const pathParts = pathname.split("/").filter((part) => part !== "");
  // Mengambil dua tingkat pertama dari pathname
  const pathName =
    pathParts.length >= 2
      ? `/${pathParts[0]}/${pathParts[1]}`
      : `/${pathParts[0]}`;

  // console.log(pathName)
  // const namaInstansi = data?.user?.nama_instansi;
  const name = data?.user?.name;
  const handleClick = (ref: string) => {
    setKlikMenu((prevState) => ({
      ...prevState,
      [ref]: !prevState[ref],
    }));
  };

  useEffect(() => {
    list.forEach((item) => {
      // Cek apakah item memiliki submenu dan pathName cocok dengan ref dari item tersebut
      if (item.li && pathName.includes(item.ref)) {
        setKlikMenu((prevState) => ({
          ...prevState,
          [item.ref]: true, // Buka dropdown hanya untuk item yang cocok
        }));
      }
    });
  }, [pathName, list]);
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__top}>
        <Link className={styles.sidebar__top__logo} href="/">
          <div className={styles.sidebar__top__logo__kiri}>
            {isMobile ? (
              <Image
                src="/assets/logo/icon.svg"
                width={50}
                height={50}
                priority={false}
                loading="lazy"
                alt="logo"
              />
            ) : (
              <Image
                src="/assets/logo/logo.svg"
                width={140}
                height={140}
                priority={false}
                loading="lazy"
                alt="logo"
              />
            )}
          </div>
        </Link>
        <div className={styles.sidebar__top__title}></div>
        <div className={styles.sidebar__top__list}>
          {list.map((lis, index) => (
            <React.Fragment key={index}>
              {lis.li ? (
                <a
                  className={`${styles.sidebar__top__list__itemDD} ${
                    pathName === lis.ref
                      ? styles.sidebar__top__list__itemDD__active
                      : ""
                  }`}
                  onClick={() => handleClick(lis.ref)}
                >
                  <i
                    className={`bx ${lis.icon} ${styles.sidebar__top__list__itemDD__icon}`}
                  ></i>
                  <p className={styles.sidebar__top__list__itemDD__title}>
                    {lis.title}{" "}
                    <i
                      className={`align-middle rounded-full bx ${
                        klikMenu[lis.ref]
                          ? "bx-chevron-up border-2"
                          : "bx-chevron-down text-gray-600 border-2 border-gray-600"
                      }`}
                    ></i>
                  </p>
                </a>
              ) : (
                <Link
                  href={lis.url}
                  className={`${styles.sidebar__top__list__item} ${
                    pathName === lis.ref
                      ? styles.sidebar__top__list__item__active
                      : ""
                  }`}
                >
                  <i
                    className={`bx ${lis.icon} ${styles.sidebar__top__list__item_icon}`}
                  ></i>
                  <p className={styles.sidebar__top__list__item_title}>
                    {lis.title}
                  </p>
                </Link>
              )}
              {lis.li &&
                klikMenu[lis.ref] &&
                lis.li.map((liss, subIndex) => (
                  <Link
                    href={liss.url}
                    key={`${index}-${subIndex}`}
                    className={`${styles.sidebar__top__list__itemli} ${
                      pathname === liss.ref
                        ? styles.sidebar__top__list__itemli__active
                        : ""
                    }`}
                  >
                    <i
                      className={`bx ${liss.icon} ${styles.sidebar__top__list__itemli_icon}`}
                    ></i>
                    <p className={styles.sidebar__top__list__itemli_title}>
                      {liss.title}
                    </p>
                  </Link>
                ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className={styles.sidebar__bottom}></div>
    </div>
  );
};

export default Sidebar;
