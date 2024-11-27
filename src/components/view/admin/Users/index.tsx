import AdminLayout from '@/components/layout/AdminLayout'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import styles from './User.module.scss'
import ModalUpdateUser from './ModalUpdateUser'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModalDeleteUser from './ModalDeleteUser';
import { User } from '@/type/user.type';
import { useSession } from 'next-auth/react';
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';
import SmartButton from '@mui/icons-material/SmartButton';
type Proptypes = {
    users: User[],
    setToaster: Dispatch<SetStateAction<{}>>,
}
const UserPageView = (props: Proptypes) => {
    const { users, setToaster } = props
    const [updateUser, setUpdateUser] = useState<User | {}>({})
    const [deletedUser, setDeletedUser] = useState<User | {}>({})
    const [usersData, setUsersData] = useState<User[]>([])
    const session: any = useSession()

    useEffect(() => {
        setUsersData(users)
    }, [users])
    return (
        <>
            <AdminLayout>
                <div>
                    <h1 className={styles.users__title}>Manajemen Users</h1>
                    <div className={styles.users__content}>
                        <table className={styles.users__content__table}>
                            <thead>
                                <tr>
                                    <th className={styles.users__content__table__number}>No</th>
                                    <th className={styles.users__content__table__username}>Username</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    {/* <th className={styles.users__content__table__aksi}>Aksi</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {usersData.map((user: any, index: number) => (
                                    <tr key={user.id}>
                                        <td>{index + 1}</td>
                                        <td>{user.username}</td>
                                        <td>{user.nama}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role_id}</td>
                                        {/* <td>
                                            <div className={styles.users__content__table__action}>
                                                <Dropdown>
                                                    <MenuButton className={styles.users__content__table__action__button}><SmartButton /></MenuButton>
                                                    <Menu className={styles.users__content__table__action__menu}>
                                                        <MenuItem onClick={() => setUpdateUser(user)}><EditIcon style={{ fontSize: '15px' }} /> Edit</MenuItem>
                                                        <MenuItem onClick={() => setDeletedUser(user)}><DeleteForeverIcon style={{ fontSize: '15px' }} /> Delete</MenuItem>
                                                    </Menu>
                                                </Dropdown>

                                            </div>
                                        </td> */}
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>

                </div>
            </AdminLayout>
            {!!(Object?.keys(updateUser).length) && (
                <ModalUpdateUser
                    updateUser={updateUser}
                    setUpdateUser={setUpdateUser}
                    setUsersData={setUsersData}
                    setToaster={setToaster}
                    session={session} />
            )}
            {!!(Object?.keys(deletedUser).length) && (
                <ModalDeleteUser
                    deletedUser={deletedUser}
                    setDeletedUser={setDeletedUser}
                    setUsersData={setUsersData}
                    setToaster={setToaster}
                    session={session} />
            )}
        </>

    )
}

export default UserPageView