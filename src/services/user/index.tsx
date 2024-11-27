import instance from "@/lib/axios/instance";
import { get } from "http";

const userService = {
    getAllUsers: (perpage: number, page: number, token: string) => instance.get(`/api/usersPaginate?perpage=${perpage}&page=${page}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
    getAllUser: (token: string) => instance.get(`/api/users`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
    addUser: (data: any, token: string) => instance.post('/api/user', data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
    updateUserRole: (id: string, data: any, token: string) => instance.put(`/api/user/roleupdate/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
    deleteUser: (data: any, token: string) => instance.delete('/api/user', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: data
    }),
    getProfile: (param: string, token: string) => instance.get(`/api/userprofile/${param}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },

    }),
    updateProfile: (data: any, token: string) => instance.put(`/api/user/profile`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
    getSearchUser: (searchData: string, perpage: number, page: number, token: string) => instance.get(`/api/userSearch/${searchData}?perpage=${perpage}&page=${page}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
}

export default userService