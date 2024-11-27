import React, { useState } from 'react'
import styles from './CardInstansi.module.scss'
import { Instansi } from '@/type/Instansi.type'

type Proptypes = {
    dataInstansis: Instansi[]
}
const CardInstansi = (props: Proptypes) => {
    const { dataInstansis } = props



    return (
        <div className={styles.cardinstansi}>
            {dataInstansis && dataInstansis.map((item, index) => (
                <div key={index} className={styles.cardinstansi__card}>
                    <div className={styles.cardinstansi__card__bagiantext}>
                        <div className={styles.cardinstansi__card__bagiantext__bagianatas}>
                            <h3 className={styles.cardinstansi__card__bagiantext__bagianatas__title}>{item.name}</h3>
                            <p className={styles.cardinstansi__card__bagiantext__bagianatas__kode}>Kode: {item.kode_instansi}</p>
                        </div>

                        <div className={styles.cardinstansi__card__bagiantext__bagianbawah}>
                            <p className={styles.cardinstansi__card__bagiantext__bagianbawah__harga}>{item.alamat}</p>
                        </div>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default CardInstansi