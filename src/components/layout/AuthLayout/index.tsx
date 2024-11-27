import styles from './AuthLayout.module.scss'
import Link from 'next/link'

type Proptypes = {
    error?: string
    children: React.ReactNode,
    title: string,
    link: string,
    linkText?: string
}
const AuthLayout = (props: Proptypes) => {
    // deklarasikan konstanta
    const { error, children, title, link, linkText } = props

    return (
        <div className={styles.auth}>
            <h1 className={styles.auth__title} data-aos="fade-right" data-aos-delay="200">
                {title}
            </h1>{error && <p className={styles.auth__error}>{error}</p>}
            <div className={styles.auth__form} data-aos="fade-left" data-aos-delay="200">
                {children}
            </div>
            {/* <p>{linkText} <Link href={link} className={styles.auth__a}> di sini</Link></p> */}
        </div>
    )
}

export default AuthLayout