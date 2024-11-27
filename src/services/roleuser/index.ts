import instance from "@/lib/axios/instance";
import { get } from "http";

const roleuserService = {
    getRoles: (token: string) => instance.get('/api/roles', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
    getAllRoleuser: (perpage: number, page: number, token: string) => instance.get(`/api/rolesPaginate?perpage=${perpage}&page=${page}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
    getById: (id: string, token: string) => instance.get(`/api/role/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
    addRoleuser: (data: any, token: string) => instance.post('/api/role', data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
    updateRole: (id: string, data: any, token: string) => instance.put(`/api/role/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
    deleteRole: (data: any, token: string) => instance.delete(`/api/role`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: data
    }),
    getSearchRole: (searchData: string, perpage: number, page: number, token: string) => instance.get(`/api/roleSearch/${searchData}?perpage=${perpage}&page=${page}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }),

}

export default roleuserService