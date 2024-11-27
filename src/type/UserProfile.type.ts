export type UserProfile = {
    id: number,
    nama: string,
    email: string,
    username: string,
    phone: string,
    role_id: string,
    instansi_id: number,
    karyawan_id: number,
    // per_id: number,
    created_at: number,
    updated_at: number,
    status: string
}
export const UserProfileDefault = {
    id: 0,
    nama: "",
    email: "",
    username: "",
    phone: "",
    role_id: "",
    instansi_id: 0,
    karyawan_id: 0,
    // per_id: 0,
    created_at: 0,
    updated_at: 0,
    status: ""
}