import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import MainTitleList from "@/components/MainTitleList";
import { Svg } from "@/components/Svg";

import MainBgImage from "../../../../public/img/work/tennis/main.webp";
import TableImage from "../../../../public/img/work/tennis/tablet.webp";

import Mob1Image from "../../../../public/img/work/tennis/mob1.webp";
import Mob2Image from "../../../../public/img/work/tennis/mob2.webp";
import Mob3Image from "../../../../public/img/work/tennis/mob3.webp";

import Tablet2Image from "../../../../public/img/work/tennis/tablet2.webp";
import Tablet3Image from "../../../../public/img/work/tennis/tablet3.webp";

import Mob5Image from "../../../../public/img/work/tennis/mob5.webp";
import Mob4Image from "../../../../public/img/work/tennis/mob4.webp";

import PreviewImage from "../../../../public/img/work/medical-dashboard/preview.webp";
import { MainSection1 } from "@/components/sections/MainSection1";
import { NextPageSection } from "@/components/sections/NextPageSection";
import AutoplayVideo from "@/components/video/AutoplayVideo";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <MainSection1
          title={<>tennis club</>}
          subTitle={<span className="text-[#362EEC]">on Nemiga</span>}
          table={[
            { title: "Year:", value: "2024" },
            { title: "Services:", value: "Design & Development" },
            { title: "Industry:", value: "Sport" },
          ]}
          arrow={true}
        />
        <section className="pb-[120px]">


        <picture className="w-full">
          <source className="w-[476px] min-h-[350px]" srcSet="/img/work/tennis/main-480.webp" media="(max-width: 480px)" />
          <img className="w-[1216px] mx-auto min-h-[350px] object-cover md:min-h-[800px]" src="/img/work/tennis/main.webp" alt="" />
        </picture>

        
          {/* <Image
            className="h-[350px] sm:h-[800px] w-full object-cover"
            src={MainBgImage}
            sizes="100vw"
            layout="responsive"
            quality={80}
            priority
            alt=""
          /> */}
        </section>
        <section className="bg-[#E2E2E2]">
          <div className="container flex flex-col items-center justify-center pb-[60px] pt-[40px] md:pb-[80px] md:pt-[60px] xl:pb-[120px] xl:pt-[100px]">
            <AutoplayVideo path="/img/work/tennis/tennis1.webm" />
            <div className="grid grid-cols-3 gap-[10px] md:gap-[20px] xl:gap-[28px] mt-[30px] mb-[50px] md:mt-[40px] md:mb-[80px] xl:mt-[70px] xl:mb-[120px]">
              <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                data-delay="0"
                quality={95}
                sizes="33vw"
                src={Mob1Image}
                layout="responsive"
                alt=""
              />
              <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                data-delay="200"
                quality={95}
                sizes="33vw"
                src={Mob2Image}
                layout="responsive"
                alt=""
              />
              <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                data-delay="400"
                quality={95}
                sizes="33vw"
                src={Mob3Image}
                layout="responsive"
                alt=""
              />
            </div>
            <Image
              quality={95}
              sizes="100vw"
              layout="responsive"
              src={Tablet2Image}
              alt=""
            />
          </div>
        </section>

        <section className="flex w-full items-center justify-between bg-white">
          <div className="container flex flex-col items-center justify-center gap-[40px] pb-[60px] pt-[40px] sm:pb-[80px] sm:pt-[60px] lg:gap-[90px] lg:pb-[120px] lg:pt-[100px]">
            {/* <Image sizes="100vw" src={Tablet3Image} alt="" quality={95} /> */}
            <AutoplayVideo path="/img/work/tennis/tennis2.webm" />
            <div className="grid grid-cols-1 gap-[60px] sm:grid-cols-2 sm:gap-[20px]">
              <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                data-delay="0"
                src={Mob5Image}
                sizes="50vw"
                alt=""
                quality={95}
              />
              <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                data-delay="200"
                src={Mob4Image}
                sizes="50vw"
                alt=""
                quality={95}
              />
            </div>
          </div>
        </section>
        <NextPageSection
          title="Medical Dashboard"
          href="/work/medical-dashboard"
          image={PreviewImage}
          bgColor="#f0f1ec"
        />
      </main>
      <Footer />
    </>
  );
}
