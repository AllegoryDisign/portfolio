import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainSection1 } from "@/components/sections/MainSection1";
import { NextPageSection } from "@/components/sections/NextPageSection";

import Banner1Image from "../../../../public/img/work/404/error1.png";
import Banner2Image from "../../../../public/img/work/404/error2.png";
import Banner3Image from "../../../../public/img/work/404/error3.png";
import Banner4Image from "../../../../public/img/work/404/error4.png";
import Banner5Image from "../../../../public/img/work/404/error5.png";
import PreviewImage from "../../../../public/img/work/dental-clinic/preview.png";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <MainSection1
          title={<>404 page</>}
          subTitle={<span className="text-[#362EEC]">collection</span>}
          table={[
            { title: "Year:", value: "2023-2024" },
            { title: "Services:", value: "Design" },
            { title: "Industry:", value: "Error page" },
          ]}
        />
        <section className="container">
          <Image
            sizes="100vw"
            quality={95}
            className="mb-[60px] md:mb-[80px]"
            src={Banner1Image}
            alt=""
          />
          <Image
            sizes="100vw"
            quality={95}
            className="mb-[60px] md:mb-[80px]"
            src={Banner2Image}
            alt=""
          />
          <Image
            sizes="100vw"
            quality={95}
            className="mb-[60px] md:mb-[80px]"
            src={Banner3Image}
            alt=""
          />
          <Image
            sizes="100vw"
            quality={95}
            className="mb-[60px] md:mb-[80px]"
            src={Banner4Image}
            alt=""
          />
          <Image
            sizes="100vw"
            quality={95}
            className="mb-[60px] md:mb-[80px]"
            src={Banner5Image}
            alt=""
          />
        </section>
        <NextPageSection
          image={PreviewImage}
          href="/work/dental-clinic"
          bgColor="#ECECEC"
          title="Dental clinic Ortodent"
        />
      </main>
      <Footer />
    </>
  );
}
