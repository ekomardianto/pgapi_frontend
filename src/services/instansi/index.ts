import instance from "@/lib/axios/instance";
const instansiServices = {
    getAllInstansi: (token: string) => instance.get('/api/instansis', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
    getInstansiPerusahaan: (per_id: string, token: string) => instance.get(`/api/instansisPerusahaan/${per_id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
    addInstansi: (data: any, token: string) => instance.post('/api/instansi', data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
    updateInstansi: (id: string, data: any, token: string) => instance.put(`/api/instansi/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
    deleteInstansi: (data: any, token: string) => instance.delete('/api/instansi', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: data
    })
}
export default instansiServices