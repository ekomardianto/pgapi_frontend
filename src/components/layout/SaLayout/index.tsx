import Sidebar from "@/components/fragments/sidebar";
import React from "react";
import styles from "./SaLayout.module.scss";
import { encrypt } from "@/utils/secureUrl";
import Appbar from "@/components/fragments/appbar";

type Proptypes = {
  children: React.ReactNode;
};

const listSidebarItems = [
  {
    title: "Home",
    url: `/sa`,
    ref: "/sa",
    icon: "bxs-dashboard",
  },
  {
    title: "Perusahaan",
    url: "/sa/perusahaan",
    ref: "/sa/perusahaan",
    icon: "bxs-institution",
  },
  {
    title: "Instansi",
    url: "/sa/instansi",
    ref: "/sa/instansi",
    icon: "bxs-store-alt",
  },
  {
    title: "Users",
    url: "/sa/users",
    ref: "/sa/users",
    icon: "bxs-group",
  },
  {
    title: "Wewenang User",
    url: "/sa/roleuser",
    ref: "/sa/roleuser",
    icon: "bxs-user-check",
  },
  {
    title: "Member Page",
    url: "/member",
    ref: "/member",
    icon: "bxs-user-account",
  },
];
const SaLayout = (props: Proptypes) => {
  const { children } = props;
  return (
    <div className={styles.admin}>
      <Sidebar list={listSidebarItems} />
      <div className={styles.admin__content}>
        <Appbar />
        {children}
      </div>
    </div>
  );
};

export default SaLayout;
