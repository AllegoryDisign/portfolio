import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import MainBgImage from "../../../../public/img/work/dental-clinic/main.png";

import Phone1Image from "../../../../public/img/work/dental-clinic/phone1.png";
import Phone2Image from "../../../../public/img/work/dental-clinic/phone2.png";
import Phone3Image from "../../../../public/img/work/dental-clinic/phone3.png";

import VideoImage from "../../../../public/img/work/dental-clinic/video.png";
import BoshkaImage from "../../../../public/img/work/dental-clinic/boshka.png";

import Tablet1Image from "../../../../public/img/work/dental-clinic/tablet1.png";
import Tablet2Image from "../../../../public/img/work/dental-clinic/tablet2.png";

import TennisImage from "../../../../public/img/work/dental-clinic/tenis.png";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Image
          className="w-full"
          src={MainBgImage}
          alt=""
          quality={100}
          sizes="100vw"
          layout="responsive"
          priority
        />
        <div className="flex w-full items-center justify-between bg-[#D8DEE4]">
          <div className="container flex flex-col items-center justify-center gap-[40px] pb-[60px] pt-[40px] sm:pb-[80px] sm:pt-[60px] lg:gap-[70px] lg:pb-[120px] lg:pt-[100px]">
            <Image quality={100} sizes="100vw" src={VideoImage} alt="" />
            <div className="grid grid-cols-3 gap-[10px] xs:gap-[20px] sm:gap-[30px] lg:gap-[72px]">
              <Image src={Phone1Image} alt="" sizes="33vw" quality={100} />
              <Image src={Phone2Image} alt="" sizes="33vw" quality={100} />
              <Image src={Phone3Image} alt="" sizes="33vw" quality={100} />
            </div>
          </div>
        </div>
        <Image
          className="w-full"
          src={BoshkaImage}
          alt=""
          sizes="100vw"
          quality={100}
        />
        <div className="flex w-full items-center justify-between bg-white">
          <div className="container flex flex-col items-center justify-center gap-[40px] pb-[60px] pt-[40px] sm:pb-[80px] sm:pt-[60px] lg:gap-[90px] lg:pb-[120px] lg:pt-[100px]">
            <img src="/img/work/dental-clinic/video2.png" alt="" />
            <div className="grid grid-cols-1 gap-[60px] sm:grid-cols-2 sm:gap-[20px]">
              <Image src={Tablet1Image} alt="" sizes="50vw" quality={100} />
              <Image src={Tablet2Image} alt="" sizes="50vw" quality={100} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#26292E] py-[60px]">
          <div className="container flex flex-col items-center">
            <span className="inter font-medium leading-[120%] text-white sm:text-[18px]">
              Next work
            </span>

            <span className="mb-[36px] mt-[12px] text-[24px] font-semibold uppercase leading-[130%] text-white sm:text-[40px] md:mb-[45px] md:mt-[45px] lg:text-[64px]">
              tennis club
            </span>
            <div className="flex w-full justify-center border-b border-b-[#656565]">
              <div className="md:w-[458px]sm:pb-0 relative w-full overflow-hidden bg-[#213D5C] pb-[50%] sm:h-[calc(180px)] sm:w-[358px] sm:pb-0 md:h-[200px] md:w-[458px] lg:h-[200px] lg:w-[600px]">
                <Image
                  className="absolute -bottom-[50%] left-[20px] w-[calc(100%-40px)] lg:-bottom-[125%]"
                  src={TennisImage}
                  sizes="50vw"
                  quality={100}
                  alt=""
                />
              </div>
            </div>
            <Link
              className="mt-[60px] flex h-[180px] w-[180px] min-w-[180px] cursor-pointer items-center justify-center rounded-full bg-blue text-lg text-white transition hover:bg-blueHover"
              href="/work"
            >
              All work
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
