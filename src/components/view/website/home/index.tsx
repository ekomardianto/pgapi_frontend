
import Button from '@/components/ui/button'
import styles from './Websitehome.module.scss'
import Image from 'next/image'
// import ypoSvg from '@/assets/ypo.svg'
const HomeView = () => {
    return (
        <div className={styles.home}>
            <div className={styles.home__rowatas}>
                <h1>Onlinekan Tokomu</h1>
                <h2>bangun <span className={styles.home__rowatas__span}>Branding</span> mu</h2>
            </div>
            <h3 className={styles.home__rowplan__title}>Paket Website Landing Page</h3>
            <div className={styles.home__rowplan}>
                <div className={styles.home__rowplan__box}>
                    <div className={styles.home__rowplan__box__kode}>YPO</div>
                    <h4 className={styles.home__rowplan__box__title}>Yang Penting Online</h4>
                    <Image src="/assets/homeassets/ypo.svg" width={250} height={250} priority={false} loading='lazy' alt='ypo - yang penting online' className={styles.home__rowplan__box__image} />
                    <div className={styles.home__rowplan__box__deskripsi}>Paket termurah namun tetap bisa membuat brand kamu nampil di internet. mendapatkan landing page dengan subdomain sesuai brandingmu di dalam domain kujual.id <br />
                        gak perlu pusing biaya server dan pembuatan website. semua kebutuhan mu terpenuhi hanya dengan berlangganan sebesar
                    </div>
                    <div className={styles.home__rowplan__box__price}><span>Rp.</span>199K<span> /tahun</span></div>
                    <Button type='button' variant='tri' className={styles.home__rowplan__box__button}>Berlangganan sekarang</Button>
                </div>
                <div className={styles.home__rowplan__box}>
                    <div className={styles.home__rowplan__box__kode}>LPB</div>
                    <h4 className={styles.home__rowplan__box__title}>Landing Page Branding</h4>
                    <Image src="/assets/homeassets/lpb.svg" width={250} height={250} priority={false} loading='lazy' alt='ypo - landing page branding' className={styles.home__rowplan__box__image} />
                    <div className={styles.home__rowplan__box__deskripsi}>Paket murah dan efisien membuat brand kamu nampil di internet dengan independend nama domain sesuai branding produk kamu dengan extensi .com / .id <br />
                        gak perlu pusing biaya server dan pembuatan website. semua kebutuhan mu terpenuhi hanya dengan berlangganan sebesar
                    </div>
                    <div className={styles.home__rowplan__box__price}><span>Rp.</span>300K<span> /tahun</span></div>
                    <Button type='button' variant='tri' className={styles.home__rowplan__box__button}>Berlangganan sekarang</Button>
                </div>
                <div className={styles.home__rowplan__box}>
                    <div className={styles.home__rowplan__box__kode}>TKO</div>
                    <h4 className={styles.home__rowplan__box__title}>Toko Online</h4>
                    <Image src="/assets/homeassets/tko.svg" width={250} height={250} priority={false} loading='lazy' alt='ypo - landing page branding' className={styles.home__rowplan__box__image} />
                    <div className={styles.home__rowplan__box__deskripsi}>Paket toko online dengan website dan web produk dinamis. Ini merupakan paket lengkap kamu mendapatkan website public dan admin dashboard sehingga kamu dapat melakukan semua hal terhadap tokomu seperti<br />
                        memanajemen produk, stok, diskon, dan laporan penjualan serta laporan keuangan
                    </div>
                    <div className={styles.home__rowplan__box__price}><span>Rp.</span>499K<span> /tahun</span></div>
                    <Button type='button' variant='tri' className={styles.home__rowplan__box__button}>Berlangganan sekarang</Button>
                </div>
            </div>
            <div className={styles.home__rowbawah}></div>
        </div>
    )
}

export default HomeView