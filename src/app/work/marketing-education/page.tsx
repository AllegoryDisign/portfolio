import { Svg } from "@/components/Svg";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import MainBgImage from "../../../../public/img/work/dental-clinic/main.webp";

import Phone1Image from "../../../../public/img/work/dental-clinic/phone1.webp";
import Phone2Image from "../../../../public/img/work/dental-clinic/phone2.webp";
import Phone3Image from "../../../../public/img/work/dental-clinic/phone3.webp";

import VideoImage from "../../../../public/img/work/dental-clinic/video.webp";
import BoshkaImage from "../../../../public/img/work/dental-clinic/boshka.webp";

import Tablet1Image from "../../../../public/img/work/dental-clinic/tablet1.webp";
import Tablet2Image from "../../../../public/img/work/dental-clinic/tablet2.webp";

import PrewiewImage from "../../../../public/img/work/tennis/preview.webp";
import { MainSection1 } from "@/components/sections/MainSection1";
import { NextPageSection } from "@/components/sections/NextPageSection";
import AutoplayVideo from "@/components/video/AutoplayVideo";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <MainSection1
          title={<>Marketing</>}
          subTitle={<span className="text-[#362EEC]">Education</span>}
          table={[
            { title: "Year:", value: "2025" },
            { title: "Services:", value: "Design" },
            { title: "Industry:", value: "Business / Marketing" },
          ]}
          arrow={true}
        />

        <section className="relative pb-[120px]">

        <picture className="w-full">
          <source className="w-[476px] min-h-[350px]" srcSet="/img/work/marketing-education/main-480.webp" media="(max-width: 480px)" />
          <img className="w-[1216px] mx-auto min-h-[350px] object-cover md:min-h-[800px]" src="/img/work/marketing-education/main.webp" alt="" />
        </picture>

          <div className="flex items-center justify-center absolute top-[35%] left-[50%] md:top-[45%] md:left-[50%] -translate-x-1/2 -translate-y-1/2 md:w-[200px] md:h-[100px]">
            <div
              className="animate__animated opacity-0"
              data-animation="animate__fadeInUp"
            >
              <Svg
                className="w-full h-full md:w-[153px] md:h-[122px]"
                width={153.48}
                height={122.52}
                iconId="icon-logo-marketing"
              />
            </div>
          </div>
        </section>
        <div className="flex w-full items-center justify-between bg-[#D8DEE4]">
          <div className="container flex flex-col items-center justify-center gap-[40px] pb-[60px] pt-[40px] sm:pb-[80px] sm:pt-[60px] lg:gap-[70px] lg:pb-[120px] lg:pt-[100px]">
            {/* <Image quality={95} sizes="100vw" src={VideoImage} alt="" /> */}
            <AutoplayVideo path="/img/work/dental-clinic/ortodent1.webm" />
            <div className="grid grid-cols-3 gap-[10px] xs:gap-[20px] sm:gap-[30px] lg:gap-[72px]">
              <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                data-delay="0"
                src={Phone1Image}
                alt=""
                sizes="33vw"
                quality={95}
              />
              <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                data-delay="200"
                src={Phone2Image}
                alt=""
                sizes="33vw"
                quality={95}
              />
              <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                data-delay="400"
                src={Phone3Image}
                alt=""
                sizes="33vw"
                quality={95}
              />
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
            <AutoplayVideo path="/img/work/dental-clinic/ortodent2.webm" />

            <div className="grid grid-cols-1 gap-[60px] sm:grid-cols-2 sm:gap-[20px]">
              <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                data-delay="0"
                src={Tablet1Image}
                alt=""
                sizes="50vw"
                quality={95}
              />
              <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                data-delay="200"
                src={Tablet2Image}
                alt=""
                sizes="50vw"
                quality={95}
              />
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
