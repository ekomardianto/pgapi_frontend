import UserPageView from "@/components/view/admin/Users"
import userService from "@/services/user"
import { useSession } from "next-auth/react"
import { useCallback, useEffect, useState } from "react"

const AdminUserPage = ({ setToaster }: any) => {
    const [users, setUsers] = useState([])
    const session: any = useSession()
    const getAllUsers = useCallback(async () => {
        const { data } = await userService.getAllUser(session.data?.accessToken)

        if (data.status_code !== 200) {
            setToaster({
                variant: 'danger',
                message: 'Data Users gagal!'
            })
        } else {
            setToaster({
                variant: 'success',
                message: 'Data Users berhasil!'
            })

        }
        setUsers(data.data)
    }, [session.data?.accessToken, setToaster, setUsers])

    useEffect(() => {
        if (session.status === 'authenticated') {
            getAllUsers()
        }
    }, [getAllUsers, session.status])

    return (
        <UserPageView users={users} setToaster={setToaster} />
    )
}

export default AdminUserPage