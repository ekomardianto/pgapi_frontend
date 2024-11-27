import { Coa } from "@/type/aplikasikeuangan/Coa.type";
import { TrxCoa } from "@/type/aplikasikeuangan/TrxCoa.type";
import { convertIDR } from "@/utils/curency";
import { formatCOA } from "@/utils/formatcoa";
import { millisToDateTime } from "@/utils/formatdate";
import { Link } from "@mui/material";
import React from "react";

type Proptypes = {
  coaInfo: Coa;
  dataDitambah: TrxCoa | null;
};
const KonfirmSimpanBerhasil = (prop: Proptypes) => {
  const { coaInfo, dataDitambah } = prop;
  return (
    <div className="mt-6 border-t border-gray-300">
      {dataDitambah && Object.keys(dataDitambah).length ? (
        <div>
          <div className="flex justify-center py-4 gap-8 items-center">
            <div className="text-green-500 flex flex-row gap-1 items-center">
              <i className="bx bx-check-circle text-lg" />
              <p className="text-md">Transaksi success</p>
            </div>
            <div className="flex flex-row gap-1 items-center border border-gray-500 rounded-sm px-2">
              <i className="bx bx-barcode text-lg" />
              <p>{formatCOA(coaInfo.coa)}</p>
            </div>

            <p className="text-md font-bold">{coaInfo.deskripsi}</p>
            <p>sebesar</p>
            <p className="text-md font-bold">
              Rp. {convertIDR(dataDitambah.amount)}
            </p>
            <p className="text-gray-500">
              {millisToDateTime(dataDitambah.created_at)}
            </p>
          </div>
          <div className="text-center">
            <Link href="/keuangankps/transaksi/history">
              History transaksi disini!
            </Link>
          </div>
        </div>
      ) : (
        <h2 className="mt-4 text-center text-gray-400">
          Belum ada transaksi baru!
        </h2>
      )}
    </div>
  );
};

export default KonfirmSimpanBerhasil;
