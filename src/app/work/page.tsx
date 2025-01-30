import { Svg } from "@/components/Svg";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactSection } from "@/components/sections/ContactSection";
import Link from "next/link";
import Image from "next/image";
import { WorkItem } from "@/components/WorkItem";

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
  {
    title: "Medical Dashboard",
    descr: "Design",
    date: "2024",
    href: "/work/medical-dashboard",
    img: "/img/work/medical-dashboard/preview.webp",
    bg: "bg-[#F0F1EC]",
  },
  {
    title: "vinyl record store",
    descr: "Design",
    date: "2024",
    href: "/work/vinyl",
    img: "/img/work/vinyl/preview.webp",
    bg: "bg-[#EFE9D8]",
  },

  {
    title: "Photographer portfolio",
    descr: "Design & Development",
    date: "2023",
    href: "/work/photographer",
    img: "/img/work/photographer/preview.webp",
    bg: "bg-[#D9E4E3]",
  },
  {
    title: "Web Banners collection",
    descr: "Design",
    date: "2023-2024",
    href: "/work/web-banners",
    img: "/img/work/web-banners/preview.webp",
    bg: "bg-[#000000]",
  },
  {
    title: "404 page collection",
    descr: "Design",
    date: "2023-2024",
    href: "/work/404",
    img: "/img/work/404/preview.webp",
    bg: "bg-[#ECECEC]",
  },
];

export default function Work() {
  return (
    <>
      <Header />

      <main className="flex flex-col">
        <section className="container pb-[50px] pt-[106px]">
          <h1 className="relative text-[44px] font-bold uppercase leading-[120%] text-[#404040] sm:text-[52px] md:text-[90px] xl:text-[150px]">
            <div>Creating next</div>
            <div className="flex justify-between sm:text-[52px] md:text-[90px] xl:text-[150px]">
              leveldigital
              <Svg
                className="mt-[10px] hidden rotate-90 text-blue sm:mt-[12px] sm:flex md:mt-[12px] lg:mt-[24px] xl:mt-[28px]"
                size={24}
                iconId="icon-arrow"
              />
            </div>
          </h1>
          <div className="flex flex-col justify-between lg:flex-row lg:items-center">
            <p className="font-inter mt-[10px] text-[17px] font-medium leading-[121%] text-[#404040] sm:mt-[16px] sm:text-[17px] md:text-[18px] lg:max-w-[327px]">
            I&nbsp;use my&nbsp;passion and skills to&nbsp;create digital products. Explore my&nbsp;projects below to&nbsp;witness firsthand the impact of&nbsp;my&nbsp;skills
            </p>
            <span className="mt-[10px] flex justify-end text-[44px] font-bold uppercase leading-[120%] text-blue md:text-[90px] xl:text-[150px]">
              PRODUCTS
            </span>
          </div>
        </section>
        <section className="container grid grid-cols-1 gap-y-[60px] pb-[60px] md:grid-cols-2 md:gap-x-[20px] md:gap-y-[80px] md:pb-[80px] lg:gap-y-[120px] lg:pb-[120px]">
          {works.map((w, i) => (
            <WorkItem {...w} key={i} />
          ))}
        </section>
      </main>
      <ContactSection />
      <Footer />
    </>
  );
}
