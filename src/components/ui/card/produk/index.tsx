import React from "react";
import styles from "./CardFetch.module.scss";
import { Produk } from "@/type/produk.type";
import { convertIDR } from "@/utils/curency";
import { Coa } from "@/type/aplikasikeuangan/Coa.type";
type Proptypes = {
  data: Produk[];
  session: any;
};
const CardFetch = (props: Proptypes) => {
  const { data, session } = props;
  return (
    <div className={styles.cardfetch}>
      {data.map((item, index) => (
        <div key={index} className={styles.cardfetch__card}>
          <div className={styles.cardfetch__card__bagiantext}>
            <h3 className={styles.cardfetch__card__bagiantext__title}>
              {item.name}
            </h3>
            <p className={styles.cardfetch__card__bagiantext__kode}>
              {item.kode_produk}
            </p>
            <div className={styles.cardfetch__card__bagiantext__bagianbawah}>
              <p
                className={
                  styles.cardfetch__card__bagiantext__bagianbawah__harga
                }
              >
                {convertIDR(item.harga)}
              </p>
              <p
                className={
                  styles.cardfetch__card__bagiantext__bagianbawah__kategori
                }
              >
                {item.nama_kategori}
              </p>
            </div>
          </div>
          <div className={styles.cardfetch__card__bagianstok}>
            <p className={styles.cardfetch__card__bagianstok__label}>Stok</p>
            <p className={styles.cardfetch__card__bagianstok__stok}>
              {item.kumulatif_stok}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CardFetch;
