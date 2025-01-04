import { Svg } from "@/components/Svg";
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

import PrewiewImage from "../../../../public/img/work/dental-clinic/preview.png";
import { MainSection1 } from "@/components/sections/MainSection1";
import { NextPageSection } from "@/components/sections/NextPageSection";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <MainSection1
          title={<>Dental clinic</>}
          subTitle={<span className="text-[#362EEC]">Ortodent</span>}
          table={[
            { title: "Year:", value: "2024" },
            { title: "Services:", value: "Design & Development" },
            { title: "Industry:", value: "Medical / Healthcare" },
          ]}
        />

        <section className="relative">
          <Image
            className="w-full min-h-[350px] object-cover md:min-h-[800px]"
            src={MainBgImage}
            alt=""
            quality={90}
            sizes="100vw"
            layout="responsive"
            priority
          />
          <div className="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[200px] md:h-[100px]">
            <div
              className="animate__animated opacity-0"
              data-animation="animate__fadeInUp"
            >
              <Svg
                className="w-full h-full md:w-[220px] md:h-[100px]"
                width={99}
                height={49}
                iconId="icon-logo-dental"
              />
            </div>
          </div>
        </section>
        <div className="flex w-full items-center justify-between bg-[#D8DEE4]">
          <div className="container flex flex-col items-center justify-center gap-[40px] pb-[60px] pt-[40px] sm:pb-[80px] sm:pt-[60px] lg:gap-[70px] lg:pb-[120px] lg:pt-[100px]">
            <Image quality={95} sizes="100vw" src={VideoImage} alt="" />
            <div className="grid grid-cols-3 gap-[10px] xs:gap-[20px] sm:gap-[30px] lg:gap-[72px]">
              <Image src={Phone1Image} alt="" sizes="33vw" quality={95} />
              <Image src={Phone2Image} alt="" sizes="33vw" quality={95} />
              <Image src={Phone3Image} alt="" sizes="33vw" quality={95} />
            </div>
          </div>
        </div>
        <Image
          className="w-full"
          src={BoshkaImage}
          alt=""
          sizes="100vw"
          quality={95}
        />
        <div className="flex w-full items-center justify-between bg-white">
          <div className="container flex flex-col items-center justify-center gap-[40px] pb-[60px] pt-[40px] sm:pb-[80px] sm:pt-[60px] lg:gap-[90px] lg:pb-[120px] lg:pt-[100px]">
            <img src="/img/work/dental-clinic/video2.png" alt="" />
            <div className="grid grid-cols-1 gap-[60px] sm:grid-cols-2 sm:gap-[20px]">
              <Image src={Tablet1Image} alt="" sizes="50vw" quality={95} />
              <Image src={Tablet2Image} alt="" sizes="50vw" quality={95} />
            </div>
          </div>
        </div>
        <NextPageSection
          title="tennis club"
          bgColor="#213d5c"
          image={PrewiewImage}
          href="/work/tennis"
        />
      </main>
      <Footer />
    </>
  );
}
