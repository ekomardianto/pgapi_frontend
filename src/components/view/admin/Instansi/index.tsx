import AdminLayout from '@/components/layout/AdminLayout'
import styles from './Instansi.module.scss'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Button from '@/components/ui/button'
import { Instansi } from '@/type/Instansi.type'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModalAddInstansi from './ModalAddInstansi'
import { useSession } from 'next-auth/react'
import ModalUpdateInstansi from './ModalUpdateInstansi'
import ModalDeleteInstansi from './ModalDeleteInstansi'
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';
import SmartButton from '@mui/icons-material/SmartButton';

type Proptypes = {
    instansis: Instansi[]
    setToaster: Dispatch<SetStateAction<{}>>
}
const InstansiPageView = (props: Proptypes) => {
    const { instansis, setToaster } = props
    const [instansiData, setInstansiData] = useState<Instansi[]>([])
    const [addInstansi, setAddInstansi] = useState(false)
    const [updateInstansi, setUpdateInstansi] = useState<Instansi | {}>({})
    const [deletedInstansi, setDeletedInstansi] = useState<Instansi | {}>({})
    const session: any = useSession()

    useEffect(() => {
        setInstansiData(instansis)
    }, [instansis])
    return (
        <>
            <AdminLayout>
                <div>
                    <h1 className={styles.instansi__title}>Manajemen instansi</h1>
                    <div className={styles.instansi__content}>
                        <div className={styles.instansi__content__addButton}>
                            <Button type='button' variant='tri' onClick={() => setAddInstansi(true)}> <i className='bx bx-plus' /> Tambah instansi</Button>
                        </div>
                        <table className={styles.instansi__content__table}>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Alamat</th>
                                    <th>Telp/HP</th>
                                    <th className='btnaksitd'>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {instansiData.map((instansi: any, index: number) => (
                                    <tr key={instansi.id}>
                                        <td>{index + 1}</td>
                                        <td>{instansi.name}</td>
                                        <td>{instansi.alamat}</td>
                                        <td>{instansi.phone}</td>
                                        <td>
                                            <div className={styles.instansi__content__table__action}>
                                                <Dropdown>
                                                    <MenuButton className={styles.instansi__content__table__action__button}><SmartButton /></MenuButton>
                                                    <Menu className={styles.instansi__content__table__action__menu}>
                                                        <MenuItem onClick={() => setUpdateInstansi(instansi)}><EditIcon style={{ fontSize: '15px' }} /> Edit</MenuItem>
                                                        <MenuItem onClick={() => setDeletedInstansi(instansi)}><DeleteForeverIcon style={{ fontSize: '15px' }} /> Delete</MenuItem>
                                                    </Menu>
                                                </Dropdown>

                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>

                </div>
            </AdminLayout>
            {addInstansi && (
                <ModalAddInstansi
                    setAddInstansi={setAddInstansi}
                    setToaster={setToaster}
                    setInstansiData={setInstansiData} />
            )}
            {!!(Object?.keys(updateInstansi).length) && (
                <ModalUpdateInstansi
                    updateInstansi={updateInstansi}
                    setUpdateInstansi={setUpdateInstansi}
                    setInstansiData={setInstansiData}
                    setToaster={setToaster}
                    session={session} />
            )}
            {!!(Object?.keys(deletedInstansi).length) && (
                <ModalDeleteInstansi
                    deletedInstansi={deletedInstansi}
                    setDeletedInstansi={setDeletedInstansi}
                    setInstansiData={setInstansiData}
                    setToaster={setToaster}
                    session={session} />
            )}
        </>
    )
}

export default InstansiPageView