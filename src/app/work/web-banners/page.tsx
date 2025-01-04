import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainSection1 } from "@/components/sections/MainSection1";
import { NextPageSection } from "@/components/sections/NextPageSection";

import Banner1Image from "../../../../public/img/work/web-banners/banner1.png";
import Banner2Image from "../../../../public/img/work/web-banners/banner2.png";
import Banner3Image from "../../../../public/img/work/web-banners/banner3.png";
import Banner4Image from "../../../../public/img/work/web-banners/banner4.png";
import Banner5Image from "../../../../public/img/work/web-banners/banner5.png";
import PreviewImage from "../../../../public/img/work/404/preview.png";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <MainSection1
          title={<>Web banners</>}
          subTitle={<span className="text-[#362EEC]">collection</span>}
          table={[
            { title: "Year:", value: "2023-2024" },
            { title: "Services:", value: "Design" },
            { title: "Industry:", value: "Digital Marketing" },
          ]}
        />
        <section className="container">
          <Image className="mb-[60px] md:mb-[80px]" src={Banner1Image} alt="" />
          <div className="grid grid-cols-1 gap-[60px] md:gap-[20px] md:grid-cols-2 mb-[60px] md:mb-[80px]">
            <Image
              sizes="100vw"
              quality={95}
              className="flex-1 w-full"
              src={Banner2Image}
              alt=""
            />
            <Image
              sizes="100vw"
              quality={95}
              className="flex-1 w-full"
              src={Banner3Image}
              alt=""
            />
          </div>
          <Image className="mb-[60px] md:mb-[80px]" src={Banner4Image} alt="" />
          <Image className="mb-[60px] md:mb-[80px]" src={Banner5Image} alt="" />
        </section>
        <NextPageSection
          image={PreviewImage}
          href="/work/404"
          bgColor="#ECECEC"
          title="404 page collection"
        />
      </main>
      <Footer />
    </>
  );
}
