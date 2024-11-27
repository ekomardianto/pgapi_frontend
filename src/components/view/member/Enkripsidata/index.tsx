import MemberLayout from '@/components/layout/MemberLayout';
import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './EnkripsiData.module.scss'
import * as XLSX from 'xlsx';
import { sha256, sha224 } from 'js-sha256';
import { Button } from '@mui/material';

const EnkripsiPageView = () => {
    const [excelFile, setExcelFile] = useState<any>(null);
    const [typeError, setTypeError] = useState("");
    const [fileName, setFileName] = useState<string>('');
    const [downloadUrl, setDownloadUrl] = useState<string>('');
    const [formHover, setFormHover] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleFormHover = () => {
        if (formHover) {
            setFormHover(false);
            return;
        } else {
            setFormHover(true);
        }
    }
    const handlePilihFile = () => {
        const fileInput: HTMLInputElement = document.getElementById('file-input') as HTMLInputElement;
        fileInput.click();
    }
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target && e.target.files) {
            const fileType = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
            const selectedFile = e.target.files[0];
            if (selectedFile) {
                if (selectedFile && fileType.includes(selectedFile.type)) {
                    setTypeError("");
                    setFileName(selectedFile.name);

                    let reader = new FileReader();
                    reader.readAsArrayBuffer(selectedFile);
                    reader.onload = (e) => {
                        setExcelFile(e.target?.result);
                    }
                } else {
                    setTypeError('File harus berekstensi .xlsx');
                    setExcelFile(null);
                }
            }
        };
    }

    const handleSubmit = async (e: any) => {
        setIsLoading(true)
        e.preventDefault();
        const form = e.target as HTMLFormElement

        setTimeout(async () => {
            if (excelFile !== null) {
                console.log("ada data");
                const workbook = XLSX.read(excelFile, { type: 'buffer' });
                const worksheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[worksheetName];
                const data = XLSX.utils.sheet_to_json(worksheet);

                const dataToExport = data.map((item: any) => {
                    return {
                        'No HP': sha256(String(item['no_hp'])),
                        'Prov': item['prov'],
                        'Reg User': item['reg_user'],
                    }
                });

                const workbookToExport = XLSX.utils.book_new();
                const worksheetToExport = XLSX.utils.json_to_sheet(dataToExport);
                XLSX.utils.book_append_sheet(workbookToExport, worksheetToExport, 'EnkripData');
                XLSX.writeFile(workbookToExport, `dataencrypted.xlsx`)
                form.reset();
                setExcelFile(null);
                setFileName('');
                setIsLoading(false)
            } else {
                setIsLoading(false)
            }
        }, 0)
    }



    return (
        <MemberLayout>
            <h2>Enkripsi Data</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.enkrip}>
                    <input className={styles.enkrip__input} type="file" accept=".xlsx, .xls" onChange={handleFileChange} id='file-input' />
                    <label
                        onClick={handlePilihFile}
                        onMouseEnter={handleFormHover}
                        onMouseLeave={handleFormHover}
                        className={formHover ? styles.enkrip__labelhover : styles.enkrip__label}
                        id='custom-file-input'
                    >
                        <i className='bx bxs-file-import'></i>
                        <p>{fileName ? fileName : 'Pilih File Excel'}</p>
                    </label>
                    <Button className={styles.enkrip__btn} variant="contained" color="success" type="submit" disabled={isLoading || excelFile === null}>
                        {isLoading ? (<div className='box-loader'><div className='loader' /><p>Processing...</p></div>) : 'Upload'}
                    </Button>
                </div>
            </form>
            {typeError && <p className={styles.error}>{typeError}</p>}
            {/* {excelFile && !typeError ? (<div>{excelFile}</div>) : ""} */}
            {downloadUrl && (
                <div>
                    <a href={downloadUrl} download>
                        Download Processed File
                    </a>
                </div>
            )}
        </MemberLayout>
    )
}

export default EnkripsiPageView