import Sidebar from "@/components/fragments/sidebar";
import styles from "./MemberLayout.module.scss";
import React from "react";
import Appbar from "@/components/fragments/appbar";

type Proptypes = {
  children: React.ReactNode;
};

const listSidebarItems = [
  {
    title: "Home",
    url: "/member",
    ref: "/member",
    icon: "bxs-dashboard",
  },
  {
    title: "Orders",
    url: "/member/orders",
    ref: "/member/orders",
    icon: "bxs-basket",
  },
  {
    title: "Profile",
    url: "/member/profile",
    ref: "/member/profile",
    icon: "bxs-user-detail",
  },
  {
    title: "Enkripsi",
    url: "/member/enkripsidata",
    ref: "/member/enkripsidata",
    icon: "bxl-netlify",
  },
];
const MemberLayout = (props: Proptypes) => {
  const { children } = props;
  return (
    <div className={styles.member}>
      <Sidebar list={listSidebarItems} />
      <div className={styles.member__content}>
        <Appbar />
        {children}
      </div>
    </div>
  );
};

export default MemberLayout;
