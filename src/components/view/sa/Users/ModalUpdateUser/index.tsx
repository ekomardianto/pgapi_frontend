import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import Modal from '@/components/ui/modal'
import Select from '@/components/ui/select'

import roleuserService from '@/services/roleuser'
import userService from '@/services/user'
import { User } from '@/type/user.type'
import { Key } from '@mui/icons-material'
import { get } from 'http'
import React, { Dispatch, FormEvent, SetStateAction, useEffect, useState } from 'react'

type Proptypes = {
    updateUser: User | any
    setUpdateUser: Dispatch<SetStateAction<{}>>
    setUsersData: Dispatch<SetStateAction<User[]>>
    setToaster: Dispatch<SetStateAction<{}>>
    session: any
    meta: {
        per_page: number, page: number, count_data: number, count_page: number
    }
    setMeta: Dispatch<SetStateAction<{ per_page: number; page: number; count_data: number; count_page: number; }>>
}
const ModalUpdateUser = (props: Proptypes) => {
    const { updateUser, setUpdateUser, setUsersData, setToaster, session, meta, setMeta } = props
    const [roles, setRoles] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    // console.log(roles.length)
    const getRoles = async () => {
        const result = await roleuserService.getRoles(session.data?.accessToken)
        if (result.status === 200) {
            setRoles(result.data.data)
        }
        // console.log(result)
    }

    useEffect(() => {
        getRoles()
    }, [])
    const handleUpdateUser = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        const form: any = event.target as HTMLFormElement;
        const data = {
            role_id: form.role.value,
        };
        const result = await userService.updateUserRole(updateUser.id, data, session.data?.accessToken);
        if (result.status === 200) {
            form.reset();
            setIsLoading(false);
            setUpdateUser({});
            setToaster({
                variant: 'success',
                message: 'Update Role user berhasil!'
            });
            // feth ulang seluruh data user
            const { data } = await userService.getAllUsers(meta.per_page, meta.page, session.data?.accessToken);
            console.log(data)
            setUsersData(data.data);
            setMeta(data.meta);
        } else {
            setIsLoading(false);
        }
    }

    return (
        <Modal onClose={() => setUpdateUser({})}>
            <h1>Edit User</h1>
            <form onSubmit={handleUpdateUser}>
                <Input label='Nama Lengkap' type='text' name='fullname' defaultValue={updateUser.nama} disabled={true} readonly={true} />
                <Input label='Email' type='email' name='email' defaultValue={updateUser.email} disabled={true} readonly={true} />
                <Input label='No HP/WA' type='number' name='phone' defaultValue={updateUser.phone} disabled={true} readonly={true} />
                <Select
                    label='Role user'
                    name='role'
                    defaultValue={updateUser.role_id}
                    options={roles.map((role: any) => ({
                        value: role.role,
                        label: role.role
                    }))}
                />
                <Button type='submit'>{isLoading ? (<div className='box-loader'><div className='loader' /><p>Updating...</p></div>) : 'Update'}</Button>
            </form>

        </Modal>
    )
}

export default ModalUpdateUser