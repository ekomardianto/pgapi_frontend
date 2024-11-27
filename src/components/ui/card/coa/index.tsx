import React from "react";
import styles from "./CardCoa.module.scss";
import { Coa } from "@/type/aplikasikeuangan/Coa.type";
import { formatCOA } from "@/utils/formatcoa";
type Proptypes = {
  data: Coa[];
  session: any;
};
const CardCoa = (props: Proptypes) => {
  const { data, session } = props;
  return (
    <div className={styles.cardfetch}>
      {data.map((item, index) => (
        <div key={index} className={styles.cardfetch__card}>
          <div className={styles.cardfetch__card__bagiantext}>
            <p className={styles.cardfetch__card__bagiantext__kode}>
              {formatCOA(item.coa)}
            </p>
            <h3 className={styles.cardfetch__card__bagiantext__title}>
              {item.deskripsi}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CardCoa;
