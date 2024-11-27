import UserMenu from "@/components/ui/menuUser";
import { useSession } from "next-auth/react";
import React from "react";

const Appbar = () => {
  const { data }: any = useSession();
  const namaInstansi = data?.user?.nama_instansi;
  return (
    <div className="text-right text-xl font-sans fixed top-0 right-5 z-50 px-5 flex gap-0 md:gap-2 items-center flex-col md:flex-row">
      <p className="bg-black rounded-md px-2 text-white mr-6 hidden md:block">
        {" "}
        {namaInstansi}
      </p>
      <div className="flex gap-2 items-center">
        <p>Hi, {data?.user?.name}</p>
        <UserMenu />
      </div>
    </div>
  );
};

export default Appbar;
