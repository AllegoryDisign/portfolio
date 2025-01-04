import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

export function NextPageSection({
  image,
  href,
  bgColor,
  title,
}: {
  image: StaticImport;
  href: string;
  bgColor: string;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center bg-[#26292E] py-[60px]">
      <div className="container flex flex-col items-center">
        <span className="inter font-medium leading-[120%] text-white sm:text-[18px]">
          Next work
        </span>

        <span className="mb-[36px] mt-[12px] text-[24px] font-semibold uppercase leading-[130%] text-white sm:text-[40px] md:mb-[45px] md:mt-[45px] lg:text-[64px]">
          {title}
        </span>
        <div className="flex w-full justify-center border-b border-b-[#656565]">
          <Link
            href={href}
            className=" flex md:w-[458px]sm:pb-0 relative w-full overflow-hidden pb-[50%] sm:h-[calc(180px)] sm:w-[358px] sm:pb-0 md:h-[200px] md:w-[458px] lg:h-[200px] lg:w-[600px] group"
            style={{ backgroundColor: bgColor }}
          >
            <Image
              className="absolute -bottom-[50%] left-[20px] w-[calc(100%-40px)] lg:-bottom-[125%] group-hover:-bottom-[25%] lg:group-hover:-bottom-[100%] transition-all"
              src={image}
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
  );
}
