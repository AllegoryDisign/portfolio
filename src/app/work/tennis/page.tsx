import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import MainTitleList from "@/components/MainTitleList";
import { Svg } from "@/components/Svg";

import MainBgImage from "../../../../public/img/work/tennis/main.jpg";
import TableImage from "../../../../public/img/work/tennis/tablet.png";

import Mob1Image from "../../../../public/img/work/tennis/mob1.png";
import Mob2Image from "../../../../public/img/work/tennis/mob2.png";
import Mob3Image from "../../../../public/img/work/tennis/mob3.png";

import Tablet2Image from "../../../../public/img/work/tennis/tablet2.png";
import Tablet3Image from "../../../../public/img/work/tennis/tablet3.png";

import Mob5Image from "../../../../public/img/work/tennis/mob5.png";
import Mob4Image from "../../../../public/img/work/tennis/mob4.png";

import PreviewImage from "../../../../public/img/work/medical-dashboard/preview.png";
export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <section className="container pb-[50px] pt-[106px] lg:pt-[140px] lg:pb-[100px] md:pt-[122px] md:pb-[70px]">
          <div className="mb-[30px]">
            <h1 className="flex font-bold text-[44px] text-[#404040] uppercase leading-[110%] sm:text-[60px] xl:text-[150px] lg:text-[105px] md:text-[90px]">
              Tennis club
              <Svg size={24} iconId="icon-arrow" />
            </h1>
            <div className="flex lg:hidden font-bold text-[44px] text-[#362EEC] uppercase leading-[110%] sm:text-[60px] xl:text-[150px] lg:text-[105px] md:text-[90px] mt-[4px]">
              On Nemiga
            </div>
          </div>
          <div className="flex items-center justify-between">
            <MainTitleList
              items={[
                { title: "Year:", value: "2023" },
                { title: "Services:", value: "Design & Development" },
                { title: "Industry:", value: "Art / photo" },
              ]}
            />
            <div className="font-bold text-[44px] text-[#362EEC] uppercase leading-[110%] sm:text-[60px] xl:text-[150px] lg:text-[105px] md:text-[90px] hidden lg:flex flex-shrink-0">
              On Nemiga
            </div>
          </div>
        </section>
        <section>
          <Image
            className=" h-[350px] sm:h-[800px] w-full object-cover"
            src={MainBgImage}
            sizes="100vw"
            layout="responsive"
            quality={100}
            priority
            alt=""
          />
        </section>
        <section className="bg-[#E2E2E2]">
          <div className="container flex flex-col items-center justify-center gap-[40px] pb-[60px] pt-[40px] sm:pb-[80px] sm:pt-[60px] lg:gap-[70px] lg:pb-[120px] lg:pt-[100px]">
            <Image
              sizes="100vw"
              quality={100}
              layout="responsive"
              src={TableImage}
              alt=""
            />
            <div className="grid grid-cols-3 gap-[10px] xs:gap-[20px] sm:gap-[30px] lg:gap-[72px]">
              <Image
                quality={100}
                sizes="33vw"
                src={Mob1Image}
                layout="responsive"
                alt=""
              />
              <Image
                quality={100}
                sizes="33vw"
                src={Mob2Image}
                layout="responsive"
                alt=""
              />
              <Image
                quality={100}
                sizes="33vw"
                src={Mob3Image}
                layout="responsive"
                alt=""
              />
            </div>
            <Image
              quality={100}
              sizes="100vw"
              layout="responsive"
              src={Tablet2Image}
              alt=""
            />
          </div>
        </section>

        <section className="flex w-full items-center justify-between bg-white">
          <div className="container flex flex-col items-center justify-center gap-[40px] pb-[60px] pt-[40px] sm:pb-[80px] sm:pt-[60px] lg:gap-[90px] lg:pb-[120px] lg:pt-[100px]">
            <Image sizes="100vw" src={Tablet3Image} alt="" quality={100} />
            <div className="grid grid-cols-1 gap-[60px] sm:grid-cols-2 sm:gap-[20px]">
              <Image src={Mob5Image} sizes="50vw" alt="" quality={100} />
              <Image src={Mob4Image} sizes="50vw" alt="" quality={100} />
            </div>
          </div>
        </section>
        <div className="flex flex-col items-center justify-center bg-[#26292E] py-[60px]">
          <div className="container flex flex-col items-center">
            <span className="inter font-medium leading-[120%] text-white sm:text-[18px]">
              Next work
            </span>

            <span className="mb-[36px] mt-[12px] text-[24px] font-semibold uppercase leading-[130%] text-white sm:text-[40px] md:mb-[45px] md:mt-[45px] lg:text-[64px]">
              Medical Dashboard
            </span>
            <Link
              href="/work/medical-dashboard"
              className="flex w-full justify-center border-b border-b-[#656565]"
            >
              <div className=" relative w-full overflow-hidden bg-[#E3E3E3] pb-[50%] sm:h-[calc(180px)] sm:w-[358px] sm:pb-0 md:h-[200px] md:w-[458px] lg:h-[200px] lg:w-[600px]">
                <Image
                  className="absolute -bottom-[50%] left-[20px] w-[calc(100%-40px)] lg:-bottom-[125%]"
                  src={PreviewImage}
                  quality={100}
                  sizes="50vw"
                  alt=""
                />
              </div>
            </Link>
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
