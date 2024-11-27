import instance from "@/lib/axios/instance";
import { User } from "@/type/user.type";

const authService = {
    registerAccount: (data: any) => instance.post('/auth/register', data),
    retrieveDataByField: (data: User) => instance.post('/auth/login', data)
}

export default authService