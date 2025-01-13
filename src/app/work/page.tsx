import { Svg } from "@/components/Svg";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";
import Image from "next/image";

type WorkType = {
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
          <h1 className="relative text-[44px] font-bold uppercase leading-[120%] text-[#404040] sm:text-[52px] md:text-[90px] lg:text-[120px] xl:text-[150px]">
            <div>Creating next</div>
            <div className="mt-[4px] flex justify-between sm:mt-[8px] sm:text-[52px] md:text-[90px] lg:text-[120px] xl:text-[150px]">
              leveldigital
              <Svg
                className="mt-[10px] hidden rotate-90 text-blue sm:mt-[12px] sm:flex md:mt-[12px] lg:mt-[24px] xl:mt-[28px]"
                size={24}
                iconId="icon-arrow"
              />
            </div>
          </h1>
          <div className="flex flex-col justify-between md:flex-row md:items-center">
            <p className="inter mt-[10px] text-[17px] font-medium leading-[121%] text-[#404040] sm:mt-[16px] sm:text-[18px] md:max-w-[327px]">
              I use my passion and skills to create digital products. Explore my
              projects below to witness firsthand the impact of my skills
            </p>
            <span className="mt-[10px] flex justify-end text-[44px] font-bold uppercase leading-[120%] text-blue md:text-[90px] lg:text-[120px] xl:text-[150px]">
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
      <Footer />
    </>
  );
}

function WorkItem({ title, descr, date, href, img, bg }: WorkType) {
  return (
    <Link href={href} className="flex flex-col">
      <div
        className={
          "group relative mb-[20px] w-full px-[20px] pb-[100%]" + " " + bg
        }
      >
        <Image
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all w-[calc(100%-30px)] scale-95 group-hover:scale-100"
          src={img}
          width={558}
          height={330}
          quality={95}
          alt=""
          sizes="50vw"
        />
      </div>
      <div className="mb-[12px] h-auto text-[24px] font-semibold uppercase leading-[130%] text-[#404040] md:text-[40px]">
        {title}
      </div>
      <hr className="mt-auto text-[#C3C6CC]" />
      <div className="inter mt-[16px] flex items-center justify-between text-[17px] font-medium leading-[120%] text-[#404040] md:text-[18px]">
        <div>{descr}</div>
        <div>{date}</div>
      </div>
    </Link>
  );
}
