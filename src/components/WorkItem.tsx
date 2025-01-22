import Image from "next/image";
import Link from "next/link";
import { WorkType } from "@/app/work/page";

export function WorkItem({ title, descr, date, href, img, bg }: WorkType) {
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
          quality={95}
          width={560}
          height={330}
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
