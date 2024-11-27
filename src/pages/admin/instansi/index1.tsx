import InstansiPageView from '@/components/view/admin/Instansi';
import instansiServices from '@/services/instansi';
import { useSession } from 'next-auth/react';
import React, { useCallback, useEffect, useState } from 'react'


const AdminInstansiPage = ({ setToaster }: any) => {
    const [instansis, setInstansis] = useState([])
    const session: any = useSession()

    const getAllInstansi = useCallback(async () => {
        // console.log(session)
        const { data } = await instansiServices.getAllInstansi(session.data?.accessToken)

        if (data.status_code !== 200) {
            setToaster({
                variant: 'danger',
                message: 'Data Instansi gagal!'
            });
        }
        setToaster({
            variant: 'success',
            message: 'Data Instansi berhasil!'
        });
        setInstansis(data.data)
    }, [session.data?.accessToken, setToaster, setInstansis]);

    useEffect(() => {
        if (session.status === 'authenticated') {
            getAllInstansi()
        }
    }, [getAllInstansi, session.status])

    return (
        <InstansiPageView instansis={instansis} setToaster={setToaster} />
    )
}
export default AdminInstansiPage