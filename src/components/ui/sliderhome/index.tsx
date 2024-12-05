// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { Button } from "@mui/material";

export default function MySlider() {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
        <SwiperSlide>
          <div className="flex lg:flex-row flex-col xlm:gap-5 lg:gap-10 gap-5 justify-between items-center ">
            <Image
              src="/images/slider1.svg"
              width={680}
              height={500}
              alt="Slide 1"
              className="xlm:w-1/2 lg:w-1/15"
            />
            <div className="text-black text-left wrapper xl:px-16 px-5">
              <h1
                data-aos="fade-left"
                className="lg:text-6xl text-2xl font-semibold lg:mb-8 mb-2"
              >
                e-Payment
              </h1>
              <p data-aos="fade-up" className="lg:text-2xl text-lg">
                Digitalisasi pembayaran produk kamu! <br /> Kontrol penjualan
                produkmu dengan mudah, cepat, kapanpun dan dimanapun.
              </p>
              <div className="mt-20 flex justify-center">
                <Button variant="contained" size="large">
                  BERGABUNG SEKARANG
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex lg:flex-row-reverse flex-col xlm:gap-5 lg:gap-10 gap-5 items-center xl:px-24">
            <Image
              src="/images/slider2.svg"
              width={600}
              height={700}
              alt="Slide 1"
              className="xlm:w-1/2 lg:w-1/15"
            />
            <div className="text-black text-left wrapper px-5">
              <p data-aos="fade-right" className="lg:text-2xl text-lg">
                Penjualan meningkat!
              </p>
              <h1
                data-aos="fade-up"
                className="lg:text-5xl text-2xl font-semibold lg:mb-8 my-2"
              >
                Pelanggan kamu semakin mudah bertransaksi <br /> Hanya
                menggunakan GADGET.
              </h1>
              <p data-aos="fade-right">Transaksi menggunakan :</p>
              <div data-aos="fade-down" className="grid grid-cols-4 gap-2">
                <Image
                  src="/images/logo-channel/payment-methode-bca.png"
                  width={100}
                  height={100}
                  alt="payment-methode-bca"
                />
                <Image
                  src="/images/logo-channel/payment-methode-bsi.png"
                  width={100}
                  height={100}
                  alt="payment-methode-bsi"
                />
                <Image
                  src="/images/logo-channel/payment-methode-bri.png"
                  width={100}
                  height={100}
                  alt="payment-methode-bri"
                />
                <Image
                  src="/images/logo-channel/payment-methode-qris.png"
                  width={100}
                  height={100}
                  alt="payment-methode-qris"
                />

                <Image
                  src="/images/logo-channel/payment-methode-gopay.png"
                  width={100}
                  height={100}
                  alt="payment-methode-gopay"
                />
                <Image
                  src="/images/logo-channel/payment-methode-dana.png"
                  width={100}
                  height={100}
                  alt="payment-methode-dana"
                />
                <Image
                  src="/images/logo-channel/payment-methode-alfamart.png"
                  width={100}
                  height={100}
                  alt="payment-methode-alfamart"
                />
                <Image
                  src="/images/logo-channel/payment-methode-indomaret.png"
                  width={100}
                  height={100}
                  alt="payment-methode-indomaret"
                />
              </div>
              <div className="mt-10 flex justify-center">
                <Button
                  variant="contained"
                  size="large"
                  className="bg-tird hover:bg-orange-900"
                >
                  CEK TARIF FEE
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex lg:flex-row flex-col xlm:gap-5 lg:gap-10 gap-5 justify-between items-center ">
            <Image
              src="/images/slider3.svg"
              width={720}
              height={680}
              alt="Slide 3"
              className=""
            />
            <div className="text-black text-left wrapper xl:px-16 px-5">
              <h1
                data-aos="fade-left"
                className="lg:text-6xl text-2xl font-semibold lg:mb-8 mb-2 bg-primary text-white text-center p-5 rounded-md"
              >
                INTEGRASI MUDAH
              </h1>
              <p data-aos="fade-up" className="lg:text-2xl text-lg">
                Spesifikasi API berstandard{" "}
                <span className="text-secondary text-3xl font-semibold">
                  SNAP BI
                </span>
              </p>
              <div className="mt-20 flex justify-center">
                <Button variant="outlined" size="large">
                  CEK DOKUMENTASI
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          @apply bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center sm:w-1 sm:h-1 sm:text-sm;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          @apply bg-blue-700 transform scale-110 transition-transform duration-300;
        }
      `}</style>
    </>
  );
}
