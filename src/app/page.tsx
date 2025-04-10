"use client";
import Image from "next/image";
import { SlideOnScroll } from "@/components/logics/SlideOnScroll";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { Header } from "@/components/Header";
import AutoplayVideo from "@/components/video/AutoplayVideo";
import Magnetic from "@/components/logics/Magnetic";

import Img1 from "../../public/img/slider/img1.webp";
import Img2 from "../../public/img/slider/img2.webp";
import Img3 from "../../public/img/slider/img3.webp";
import Img5 from "../../public/img/slider/img5.webp";
import Img6 from "../../public/img/slider/img6.webp";
import Img7 from "../../public/img/slider/img7.webp";

import { WorkItem } from "@/components/WorkItem";

import ImgWork1 from "../../public/img/work/dental-clinic/preview.webp";
import ImgWork2 from "../../public/img/work/tennis/preview.webp";
import ImgWork3 from "../../public/img/work/medical-dashboard/preview.webp";

export type WorkType = {
  title: string;
  descr: string;
  date: string;
  href: string;
  img: string;
  bg: string;
};

const works: WorkType[] = [
  {
    title: "Dental clinic Ortodent",
    descr: "Design & Development",
    date: "2024",
    href: "/work/dental-clinic",
    img: "/img/work/dental-clinic/preview.webp",
    bg: "bg-[#D8DEE4]",
  },
  {
    title: "tennis club",
    descr: "Design & Development",
    date: "2024",
    href: "/work/tennis",
    img: "/img/work/tennis/preview.webp",
    bg: "bg-[#213D5C]",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <section className="relative flex flex-col items-center bg-grayBg pt-[70px] z-20 overflow-hidden">
          <div className="relative flex uppercase">
            <div className="animate-left absolute -left-full top-[110px] z-10 whitespace-nowrap text-[160px] font-bold leading-[80%] text-blackTitle sm:text-[200px] md:top-[152px] lg:text-[280px]">
              Web ui ux Web ui ux Web ui ux Web ui ux Web ui ux Web ui ux Web ui
              ux Web ui ux Web ui ux Web ui ux
            </div>
            <div className="z-20 h-[618px] w-[600px] lg:h-[824px] lg:w-[800px]">
              <Image
                src="/img/portrait/photo_1.webp"
                alt=""
                width={800}
                height={825}
                sizes="100vw"
                layout="responsive"
                quality={95}
                priority
              />
            </div>

            <div className="animate-right absolute -right-full bottom-[150px] z-20 whitespace-nowrap text-[160px] font-bold leading-[80%] text-white opacity-85 sm:text-[200px] md:bottom-[112px] lg:bottom-[152px] lg:text-[280px]">
              Designer Designer Designer Designer Designer Designer Designer
              Designer Designer Designer
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-20">
            <div className="container flex flex-col items-end pb-10 md:flex-row md:items-center md:justify-between overflow-hidden">
              <span className="font-inter animate__animated animate__fadeIn text-[17px] font-medium text-white sm:text-[18px] lg:text-blackText">
                Located in&nbsp;Belarus
              </span>
              <span className="font-inter animate__animated animate__fadeIn text-[17px] font-medium text-white sm:text-[18px] lg:text-blackText">
                Design &amp;&nbsp;Development
              </span>
            </div>
          </div>
        </section>
        <section className="pt-[60px] md:pt-[80px] xl:pt-[120px] z-20 sm:relative sm:pb-[120px] md:pb-[20px] lg:pb-[25px]">
          <div className="font-inter container xl:relative flex flex-col justify-between font-medium text-blackText">
            <div className="sm:mr-[20px]">
              <p className="mb-[24px] xl:max-w-[907px] lg:max-w-[682px] md:max-w-[541px] lg:max-w-[682px] text-[24px]/[29.05px] md:text-[30px]/[36.31px] xl:mb-[26px] xl:text-[40px]/[48.41px]">
                Design can fascinatingly change our decisions and emotions.
                It&nbsp;converts website visitors into your customers
              </p>
              <span className="mt-[5px] sm:max-w-[210px] md:max-w-full hidden sm:text-[17px]/[20.57px] text-[18px] sm:flex">
                Passionate about creating intuitive digital solutions
              </span>
            </div>

            <div className="flex flex-col xs:flex-row sm:absolute xl:absolute xl:left-0 xl:bottom-0 xl:top-0 xl:w-full xl:h-full sm:bottom-0 sm:right-[20px] md:top-[80px]">
              <span className="mb-[30px] max-w-[240px] text-[17px]/[20.57px] xs:max-w-[190px] sm:hidden">
                Passionate about creating intuitive digital solutions
              </span>
              <Magnetic>
                <Link
                  className="ml-auto flex h-[180px] w-[180px] min-w-[180px] cursor-pofont-inter items-center justify-center rounded-full bg-blue text-lg text-white transition hover:bg-blueHover magnetic"
                  href="/about"
                >
                  About&nbsp;me
                </Link>
              </Magnetic>
            </div>
          </div>
        </section>
        <section className="hidden xl:block">
          <div className="container overflow-hidden pt-[60px] sm:pt-[80px] lg:pt-[50px] xl:pt-[48px]">
            <div className="border-b border-b-grayBorder font-medium text-blackText overflow-hidden pt-[120px] relative">
              <div className="text-[18px] font-medium text-[#A5A5A5]  absolute top-[50px]">
                Recent work
              </div>
              <Link
                href="/work/dental-clinic"
                className="group flex cursor-pofont-inter items-center justify-between border-t border-t-grayBorder transition-all h-[167px] hover:h-[195px] after:h-[80px] after:w-1/2 after:bottom-0 after:left-0 after:z-10 after:bg-white after:absolute relative z-[1] bg-white"
              >
                <div className="flex w-[320px] absolute bottom-0 translate-y-full group-hover:translate-y-0 left-1/2 transition-all duration-300">
                  <div
                    className={
                      "relative w-full px-[20px] pb-[100%] bg-[#D8DEE4]"
                    }
                  >
                    <Image
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all w-[calc(100%-30px)]"
                      src={ImgWork1}
                      quality={95}
                      alt=""
                      sizes="50vw"
                      loading="lazy"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="text-[40px] uppercase">
                  Dental clinic Ortodent
                </div>
                <div className="font-inter text-lg">
                  Design &amp;&nbsp;Development
                </div>
              </Link>
              <Link
                href="/work/tennis"
                className="group flex cursor-pofont-inter items-center justify-between border-t border-t-grayBorder transition-all h-[167px] hover:h-[195px] after:h-[80px] after:w-1/2 after:bottom-0 after:left-0 after:z-10 after:bg-white after:absolute relative z-[2] bg-white"
              >
                <div className="flex w-[320px] absolute bottom-0 translate-y-full group-hover:translate-y-0 left-1/2 transition-all duration-300">
                  <div
                    className={
                      "relative w-full px-[20px] pb-[100%] bg-[#213D5C]"
                    }
                  >
                    <Image
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all w-[calc(100%-30px)]"
                      src={ImgWork2}
                      quality={95}
                      alt=""
                      sizes="50vw"
                      unoptimized
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="text-[40px] uppercase">Tennis club</div>
                <div className="font-inter text-lg">
                  Design &amp;&nbsp;Development
                </div>
              </Link>
              <Link
                href="/work/medical-dashboard"
                className="group flex cursor-pofont-inter items-center justify-between border-t border-t-grayBorder transition-all h-[167px] hover:h-[195px] after:h-[80px] after:w-1/2 after:bottom-0 after:left-0 after:z-10 after:bg-white after:absolute relative z-[3] bg-white"
              >
                <div className="flex w-[320px] absolute bottom-0 translate-y-full group-hover:translate-y-0 left-1/2 transition-all duration-300">
                  <div
                    className={
                      "relative w-full px-[20px] pb-[100%] bg-[#F0F1EC]"
                    }
                  >
                    <Image
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all w-[calc(100%-30px)]"
                      src={ImgWork3}
                      quality={95}
                      alt=""
                      sizes="50vw"
                      loading="lazy"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="text-[40px] uppercase">Medical Dasnboard</div>
                <div className="font-inter text-lg">Design</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="block xl:hidden mt-[60px] md:mt-[80px]">
          <div className="container">
            <div className="mb-[40px] text-[18px] font-medium text-[#A5A5A5] lg:mb-[30px] hidden md:flex">
              Recent work
            </div>
            <div className="grid grid-cols-1 gap-y-[60px] md:grid-cols-2 md:gap-x-[20px] md:gap-y-[80px] lg:gap-y-[120px]">
              {works.map((w, i) => (
                <WorkItem {...w} key={i} />
              ))}
            </div>
          </div>
        </section>

        <section className="z-20 pt-[50px] md:pt-[60px] pb-[60px] md:pb-[80px] xl:pb-[120px]">
          <div>
            <Magnetic>
              <Link
                href="/work"
                className="mx-auto mb-[120px] sm:mb-[0px] miniSm:mb-[0px] md:mb-[80px] xl:mb-[120px] flex h-[180px] w-[180px] items-center justify-center rounded-full border border-grayBorder bg-white text-lg font-medium text-blackText hover:bg-blueHover hover:border-blueHover transition-all hover:text-white"
              >
                More work
              </Link>
            </Magnetic>

            <div
              className="relative hidden flex-col gap-5 pb-[calc(36%+20px)] md:flex"
              id="scroll-slider"
            >
              <div
                className="absolute right-0 top-0 flex w-[120%] gap-5"
                id="scroll-slider-item-1"
              >
                <div className="flex w-1/4 bg-[#D8DEE4] pt-[15%] relative">
                  <Image
                    className="flex w-full h-full absolute top-0 left-0 px-[20px] py-[25px] xl:py-[35px] "
                    src={Img1}
                    sizes="30vw"
                    quality={95}
                    alt=""
                    loading="lazy"
                    unoptimized
                  />
                </div>
                <div className="flex w-1/4 bg-[#E7E8EA] pt-[15%] relative">
                  <AutoplayVideo
                    className="flex w-full h-full absolute top-0 left-0 px-[20px] py-[25px] xl:py-[35px] "
                    path="/img/slider/vid1.mp4"
                  />
                </div>
                <div className="flex w-1/4 bg-[#D8DEE4] pt-[15%] relative">
                  <Image
                    className="flex w-full h-full absolute top-0 left-0 px-[20px] py-[25px] xl:py-[35px] "
                    src={Img5}
                    sizes="30vw"
                    quality={95}
                    alt=""
                    loading="lazy"
                    unoptimized
                  />
                </div>
                <div className="flex w-1/4 bg-[#21252A] pt-[15%] relative">
                  <Image
                    className="flex w-full h-full absolute top-0 left-0 px-[20px] py-[25px] xl:py-[35px] "
                    src={Img6}
                    sizes="30vw"
                    quality={95}
                    alt=""
                    loading="lazy"
                    unoptimized
                  />
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 flex w-[120%] gap-5"
                id="scroll-slider-item-2"
              >
                <div className="flex w-1/4 bg-[#D6D4CE] pt-[15%] relative">
                  <Image
                    className="flex w-full h-full absolute top-0 left-0 px-[20px] py-[25px] xl:py-[35px] "
                    src={Img2}
                    sizes="30vw"
                    quality={95}
                    alt=""
                    loading="lazy"
                    unoptimized
                  />
                </div>
                <div className="flex w-1/4 bg-[#D8DEE4] pt-[15%] relative">
                  <Image
                    className="flex w-full h-full absolute top-0 left-0 px-[20px] py-[25px] xl:py-[35px] "
                    src={Img3}
                    sizes="30vw"
                    quality={95}
                    alt=""
                    loading="lazy"
                    unoptimized
                  />
                </div>
                <div className="flex w-1/4 bg-[#E7E8EA] pt-[15%] relative">
                  <AutoplayVideo
                    className="flex w-full h-full absolute top-0 left-0  px-[20px] py-[25px] xl:py-[35px]"
                    path="/img/slider/vid2.mp4"
                  />
                </div>
                <div className="flex w-1/4 bg-[#CED4D6] pt-[15%] relative">
                  <Image
                    className="flex w-full h-full absolute top-0 left-0 px-[20px] py-[25px] xl:py-[35px] "
                    src={Img7}
                    sizes="30vw"
                    quality={95}
                    alt=""
                    loading="lazy"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
      <SlideOnScroll />
    </>
  );
}
