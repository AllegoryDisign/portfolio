import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Svg } from "@/components/Svg";
import { MainSection1 } from "@/components/sections/MainSection1";

import MainBgImage from "../../../../public/img/work/photographer/main.png";
import TabletImage from "../../../../public/img/work/photographer/tablet.png";
import Mob1Image from "../../../../public/img/work/photographer/mob1.png";
import Mob2Image from "../../../../public/img/work/photographer/mob2.png";
import Mob3Image from "../../../../public/img/work/photographer/mob3.png";
import Main2Image from "../../../../public/img/work/photographer/main2.png";
import Tablet2Image from "../../../../public/img/work/photographer/tablet2.png";
import PreviewImage from "../../../../public/img/work/web-banners/preview.png";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <MainSection1
          title={
            <>
              Ph<span className="text-[#362EEC]">o</span>t
              <span className="text-[#362EEC]">o</span>grapher
            </>
          }
          subTitle={
            <>
              <span className="text-[#362EEC]">portfolio</span>
            </>
          }
          table={[
            { title: "Year:", value: "2023" },
            { title: "Services:", value: "Design & Development" },
            { title: "Industry:", value: "Art / photo" },
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
                className="w-full h-full md:w-[197px] md:h-[97px]"
                width={99}
                height={49}
                iconId="icon-logo-photographer"
              />
            </div>
          </div>
        </section>
        <section className=" bg-[#E5E0DC] py-[60px] md:pt-[50px] md:pb-[80px] xl:pt-[80px] xl:pb-[120px]">
          <div className="container flex flex-col items-center">
            <Image
              className="mb-[60px] xl:mb-[90px] animate__animated opacity-0"
              data-animation="animate__fadeInUp"
              sizes="50vw"
              src={TabletImage}
              alt=""
              quality={100}
            />

            <div className=" grid grid-cols-3 gap-[10px] sm:gap-[30px] md:gap-[40px] lg:gap-[52px] xl:gap-[72px]">
              <Image
                className="animate__animated opacity-0 duration-1s"
                data-animation="animate__fadeInUp"
                src={Mob1Image}
                alt=""
                quality={100}
              />
              <Image
                className="animate__animated opacity-0 duration-1s"
                data-animation="animate__fadeInUp delay-2s"
                data-delay="250"
                src={Mob2Image}
                alt=""
                quality={100}
              />
              <Image
                className="animate__animated opacity-0 duration-1s"
                data-animation="animate__fadeInUp delay-3s"
                data-delay="500"
                src={Mob3Image}
                alt=""
                quality={100}
              />
            </div>
          </div>
        </section>
        <section className="flex">
          <Image
            className="min-h-[350px] object-cover md:min-h-[800px]"
            src={Main2Image}
            alt=""
            quality={100}
            sizes="100vw"
            layout="responsive"
            priority
          />
        </section>
        <section className="flex py-[60px] lg:py-[80px] xl:pb-[100px] bg-[#E5E0DC]">
          <div className="container flex items-center justify-center">
            <Image
              className="animate__animated opacity-0"
              data-animation="animate__fadeInUp"
              src={Tablet2Image}
              sizes="50vw"
              alt=""
              quality={100}
            />
          </div>
        </section>
        <div className="flex flex-col items-center justify-center bg-[#26292E] py-[60px]">
          <div className="container flex flex-col items-center">
            <span className="inter font-medium leading-[120%] text-white sm:text-[18px]">
              Next work
            </span>

            <span className="mb-[36px] mt-[12px] text-[24px] font-semibold uppercase leading-[130%] text-white sm:text-[40px] md:mb-[45px] md:mt-[45px] lg:text-[64px]">
              Web Banners collection
            </span>
            <div className="flex w-full justify-center border-b border-b-[#656565]">
              <Link
                href="/work/web-banners"
                className=" flex md:w-[458px]sm:pb-0 relative w-full overflow-hidden bg-[#000000] pb-[50%] sm:h-[calc(180px)] sm:w-[358px] sm:pb-0 md:h-[200px] md:w-[458px] lg:h-[200px] lg:w-[600px] group"
              >
                <Image
                  className="absolute -bottom-[50%] left-[20px] w-[calc(100%-40px)] lg:-bottom-[125%] group-hover:-bottom-[25%] lg:group-hover:-bottom-[100%] transition-all"
                  src={PreviewImage}
                  sizes="50vw"
                  quality={100}
                  alt=""
                />
              </Link>
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
