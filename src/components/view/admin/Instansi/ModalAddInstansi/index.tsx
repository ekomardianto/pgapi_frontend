import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import Modal from '@/components/ui/modal'
import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { useSession } from 'next-auth/react'
import { Instansi } from '@/type/Instansi.type'
import instansiServices from '@/services/instansi'

type Proptypes = {
    setToaster: Dispatch<SetStateAction<{}>>
    setAddInstansi: Dispatch<SetStateAction<boolean>>
    setInstansiData: Dispatch<SetStateAction<Instansi[]>>
}
const ModalAddInstansi = (props: Proptypes) => {
    const { setToaster, setAddInstansi, setInstansiData } = props
    const [isLoading, setIsLoading] = useState(false)
    const session: any = useSession()

    const handleAddInstansi = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        const form: any = e.target as HTMLFormElement
        const data = {
            name: form.name.value,
            alamat: form.alamat.value,
            phone: form.phone.value
        }
        console.log(data)
        const result = await instansiServices.addInstansi(data, session.data?.accessToken)
        if (result.status === 200) {
            setAddInstansi(false)
            setIsLoading(false)
            setToaster({
                variant: 'success',
                message: 'Tambah Jasa baru berhasil!'
            })

            // fetch ulang seluruh data user
            const { data } = await instansiServices.getAllInstansi(session.data?.accessToken)
            setInstansiData(data.data)

        } else {
            setIsLoading(false)
        }
    }

    return (
        <Modal onClose={() => setAddInstansi(false)}>
            <h1>Tambah Jasa Baru</h1>
            <form onSubmit={handleAddInstansi}>
                <Input label='Nama' type='text' name='name' placeholder='Nama' />
                <Input label='Alamat' type='text' name='alamat' placeholder='alamat' />
                <Input label='Phone/WA' type='number' name='phone' placeholder='no hp/wa' />


                <Button type='submit' disabled={isLoading}>{isLoading ? (<div className='box-loader'><div className='loader' /><p>Loading...</p></div>) : 'Simpan'}</Button>
            </form>

        </Modal>
    )
}

export default ModalAddInstansi