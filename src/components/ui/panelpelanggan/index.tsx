import { Button, TextField } from '@mui/material'
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import styles from './PanelPelanggan.module.scss'

type Proptypes = {
    availDataPelanggan: boolean
    availDetail: boolean
    dataInvoice: any
    pelangganData: {
        id: number,
        nopol: string,
        jenis_kendaraan: string,
        tipe_kendaraan: string,
        pelanggan: {
            id: number;
            nama_pelanggan: string;
            alamat_pelanggan: string;
            koordinat: string;
            wa_pelanggan: string;
            email_pelanggan: string;
        }
    } | {
        id: 0,
        nopol: "",
        jenis_kendaraan: "",
        tipe_kendaraan: "",
        pelanggan: {
            id: 0,
            nama_pelanggan: "",
            alamat_pelanggan: "",
            koordinat: "",
            wa_pelanggan: "",
            email_pelanggan: ""
        }
    }
    platnomor: string
    setPelangganData: Dispatch<SetStateAction<
        {
            id: number,
            nopol: string,
            jenis_kendaraan: string,
            tipe_kendaraan: string,
            pelanggan: {
                id: number;
                nama_pelanggan: string;
                alamat_pelanggan: string;
                koordinat: string;
                wa_pelanggan: string;
                email_pelanggan: string;
            }
        } | {
            id: 0,
            nopol: "",
            jenis_kendaraan: "",
            tipe_kendaraan: "",
            pelanggan: {
                id: 0,
                nama_pelanggan: "",
                alamat_pelanggan: "",
                koordinat: "",
                wa_pelanggan: "",
                email_pelanggan: ""
            }
        }
    >>
    setPlatNomor: Dispatch<SetStateAction<string>>
    setAvailDetail: Dispatch<SetStateAction<boolean>>
    setAvailDataPelanggan: Dispatch<SetStateAction<boolean>>
    searchPlatNomor: (e: any) => void
    prosesDataPelanggan: (e: any) => void
}


const PanelPelanggan = (prop: Proptypes) => {
    const { availDataPelanggan, availDetail, pelangganData, platnomor, setPelangganData, setPlatNomor, searchPlatNomor, setAvailDetail, prosesDataPelanggan, dataInvoice, setAvailDataPelanggan } = prop
    const platnomorref = useRef<HTMLInputElement>(null)

    const handlePlatNomor = (e: any) => {
        setPlatNomor(e.target.value.toUpperCase())
    }
    const handleNamaPelanggan = (e: any) => {
        setPelangganData((prevState) => ({
            ...prevState,
            pelanggan: {
                ...prevState.pelanggan,
                nama_pelanggan: e.target.value.toUpperCase(), // contoh pembaruan
            },
        }));
    }
    const handleWaPelanggan = (e: any) => {
        setPelangganData((prevState) => ({
            ...prevState,
            pelanggan: {
                ...prevState.pelanggan,
                wa_pelanggan: e.target.value.toUpperCase(), // contoh pembaruan
            },
        }));
    }

    const editDataPelanggan = async (e: any) => {
        setAvailDetail(false)
        if (platnomorref.current) {
            platnomorref.current.focus()
        }
    }

    useEffect(() => {
        if (!availDetail && platnomorref.current) {
            platnomorref.current.focus();
        }
    }, [availDetail]);

    return (
        <div className={styles.panelpelanggan__bagianpelanggan}>
            <TextField
                autoFocus
                inputRef={platnomorref}
                id="platnomor"
                label="Plat Nomor"
                variant="outlined"
                placeholder="Masukkan Plat Nomor lalu ENTER"
                className={styles.panelpelanggan__bagianpelanggan__platnomor}
                value={platnomor}
                onChange={handlePlatNomor}
                onKeyDown={(e) => e.key === "Enter" && searchPlatNomor(e)}
                disabled={availDetail ? true : false}
            />
            {availDataPelanggan === true && platnomor !== "" ? (
                <>
                    <TextField
                        id="nama_pelanggan"
                        label="Nama Pelanggan"
                        variant="outlined"
                        className={styles.newtrx__bagianpelanggan__platnomor}
                        value={pelangganData.pelanggan.nama_pelanggan}
                        onChange={handleNamaPelanggan}
                        disabled={pelangganData.id !== 0 ? true : false}
                    />
                    <TextField
                        id="wa_pelanggan"
                        label="Nomor Whatsapp"
                        variant="outlined"
                        className={styles.newtrx__bagianpelanggan__platnomor}
                        value={pelangganData.pelanggan.wa_pelanggan}
                        onChange={handleWaPelanggan}
                        disabled={pelangganData.id !== 0 ? true : false}
                    />
                    {pelangganData.id === 0 ?
                        <Button onClick={prosesDataPelanggan} type="button" variant="contained" color="secondary" disabled={pelangganData.pelanggan.wa_pelanggan ? false : true}>Proses</Button>
                        : ''}
                    {availDetail && dataInvoice.id === 0 ?
                        <Button onClick={editDataPelanggan} type="button" variant="contained" color="warning" disabled={pelangganData.pelanggan.wa_pelanggan ? false : true}>Edit</Button>
                        : ''}
                </>
            ) : ''}
        </div>
    )
}

export default PanelPelanggan