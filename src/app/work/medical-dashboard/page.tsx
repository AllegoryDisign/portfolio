import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Svg } from "@/components/Svg";
import { MainSection1 } from "@/components/sections/MainSection1";

import MainBgImage from "../../../../public/img/work/medical-dashboard/dashboard.webp";
import Dashboard2Image from "../../../../public/img/work/medical-dashboard/dashboard2.webp";
import Dashboard3Image from "../../../../public/img/work/medical-dashboard/dashboard3.webp";
import PreviewImage from "../../../../public/img/work/vinyl/preview.webp";
import { NextPageSection } from "@/components/sections/NextPageSection";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <MainSection1
          title={<>Medical</>}
          subTitle={
            <span className="text-[#362EEC] xl:text-[125px]">Dashboard</span>
          }
          table={[
            { title: "Year:", value: "2024" },
            { title: "Services:", value: "Design" },
            { title: "Industry:", value: "Medical / Healthcare" },
          ]}
        />
        <section className=" bg-[#254078] py-[60px] md:py-[80px] xl:py-[120px]">
          <div className="container flex flex-col items-center">
            <Image
              className="animate__animated opacity-0"
              data-animation="animate__fadeInUp"
              sizes="100vw"
              src={MainBgImage}
              alt=""
              quality={95}
              priority
            />
          </div>
        </section>

        <section className=" bg-[#ffffff] py-[60px] md:py-[80px] xl:py-[120px]">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-[24px] xl:gap-[80px]">
            <p className="inter text-[24px] md:text-[30px] xl:text-[40px] font-medium mb-[24px] text-[#404040]">
              The dashboard helps health care providers{" "}
              <span className="text-[#362EEC]">effectively</span> track their
              performance statistics
            </p>
            <p className="inter text-[17px] md:text-[18px] font-medium text-[#404040]">
              This project focuses on both functionality and aesthetic appeal.
              When developing the medical dashboard, it was important to focus
              on solutions that would be user friendly
            </p>
          </div>
        </section>

        <section className=" bg-[#F8F8F8] py-[60px] md:py-[80px] xl:py-[120px]">
          <div className="container flex flex-col items-center">
            <div className="mb-[60px] md:mb-[80px] xl:mb-[120px]">
              <Image
                className="mb-[30px]"
                src={Dashboard2Image}
                quality={95}
                sizes="100vw"
                alt=""
              />
              <span className="inter font-medium text-[17px] md:text-[18px] text-[#404040]">
                Created the ability to switch between light and dark themes
              </span>
            </div>

            <div>
              <Image
                className="mb-[30px]"
                src={Dashboard3Image}
                quality={95}
                sizes="100vw"
                alt=""
              />
              <div className="flex flex-col lg:flex-row justify-between">
                <p className="inter font-medium text-[24px] md:text-[30px] xl:text-[40px] lg:max-w-[450px] xl:max-w-[596px] text-[#404040] mb-[20px] lg:mb-0">
                  This project was developed according to all the design rules
                  in Figma
                </p>
                <p className="inter font-medium text-[17px] md:text-[18px] xl:max-w-[495px] lg:max-w-[450px]  text-[#404040]">
                  The clever use of meshes and components has resulted in a
                  dashboard that is not only visually appealing, but also
                  intuitive for the userz
                </p>
              </div>
            </div>
          </div>
        </section>

        <NextPageSection
          title="vinyl record store"
          bgColor="#EFE9D8"
          href="/work/vinyl"
          image={PreviewImage}
        />
      </main>
      <Footer />
    </>
  );
}
