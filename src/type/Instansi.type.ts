export type Instansi = {
    id: number
    kode_instansi: string
    perusahaan_id: number
    // karyawan_id: number
    name: string
    alamat: string
    phone: string
    createdAt: Date
    updatedAt: Date
    perusahaan: {
        id: number
        kode_per: string
        name: string
        alamat: string
        phone: string
        createdAt: Date
        updatedAt: Date
    }
}