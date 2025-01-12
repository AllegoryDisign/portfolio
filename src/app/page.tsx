import Image from "next/image";
import { SlideOnScroll } from "@/components/logics/SlideOnScroll";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { Header } from "@/components/Header";
import AutoplayVideo from "@/components/video/AutoplayVideo";
import Magnetic from "@/components/logics/Magnetic";
// import Video1 from "../../public/video/slider/slide1.mp4";
import ProjectSection from "@/components/Projects/ProjectSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <section className="relative flex flex-col items-center bg-grayBg pt-[70px] z-20">
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
                height={824}
                sizes="5vw"
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
            <div className="container flex flex-col items-end pb-10 md:flex-row md:items-center md:justify-between">
              <span className="inter animate__animated animate__fadeIn text-[17px] font-medium text-white sm:text-[18px] lg:text-blackText">
                Located in Belarus
              </span>
              <span className="inter animate__animated animate__fadeIn text-[17px] font-medium text-white sm:text-[18px] lg:text-blackText">
                Design & Development
              </span>
            </div>
          </div>
        </section>
        <section className="py-[60px] sm:py-[80px] lg:py-[120px] z-20">
          <div className="inter container flex flex-col justify-between font-medium text-blackText sm:flex-row">
            <div className="sm:mr-[20px]">
              <p className="mb-[24px] max-w-[880px] text-[24px] sm:text-[30px] lg:mb-[30px] lg:text-[40px]">
                Design can fascinatingly change our decisions and emotions. It
                converts website visitors into your customers
              </p>
              <span className="hidden text-[18px] sm:flex">
                Passionate about creating intuitive digital solutions
              </span>
            </div>

            <div className="flex flex-col xs:flex-row">
              <span className="mb-[30px] max-w-[240px] text-[17px] xs:max-w-[190px] sm:hidden">
                Passionate about creating intuitive digital solutions
              </span>
              <Magnetic>
                <Link
                  className="ml-auto flex h-[180px] w-[180px] min-w-[180px] cursor-pointer items-center justify-center rounded-full bg-blue text-lg text-white transition hover:bg-blueHover magnetic"
                  href="/about"
                >
                  About me
                </Link>
              </Magnetic>
            </div>
          </div>
        </section>
        <section className="z-20">
          <div>
            <div className="mb-[40px] text-[18px] font-medium text-[#A5A5A5] lg:mb-[30px]">
              Recent work
            </div>

            <div className="relative">
              <ProjectSection />
            </div>
            {/* <SectionProj /> */}
          </div>
        </section>
        <section className="z-20">
          <div>
            <Magnetic>
              <Link
                href="/work"
                className="mx-auto mb-40 mt-[60px] flex h-[180px] w-[180px] items-center justify-center rounded-full border border-grayBorder bg-white text-lg font-medium text-blackText"
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
                <div className="flex w-1/4 bg-[#E7E8EA] pt-[15%] relative"></div>
                <div className="flex w-1/4 bg-[#E7E8EA] pt-[15%] relative">
                  <AutoplayVideo
                    className="flex w-full h-full absolute top-0 left-0"
                    path="/video/slider/vinyl1.mkv"
                  />
                </div>
                <div className="flex w-1/4 bg-[#E7E8EA] pt-[15%] relative"></div>
                <div className="flex w-1/4 bg-[#E7E8EA] pt-[15%] relative"></div>
              </div>
              <div
                className="absolute bottom-0 left-0 flex w-[120%] gap-5"
                id="scroll-slider-item-2"
              >
                <div className="flex w-1/4 bg-[#E7E8EA] pt-[15%] relative"></div>
                <div className="flex w-1/4 bg-[#E7E8EA] pt-[15%] relative"></div>
                <div className="flex w-1/4 bg-[#E7E8EA] pt-[15%] relative">
                  <AutoplayVideo
                    className="flex w-full h-full absolute top-0 left-0"
                    path="/video/slider/maverick.mp4"
                  />
                </div>
                <div className="flex w-1/4 bg-[#E7E8EA] pt-[15%] relative"></div>
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
