import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import MainTitleList from "@/components/MainTitleList";
import { Svg } from "@/components/Svg";

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
            src="/img/work/tennis/main.jpg"
            alt=""
            width={1920}
            height={1080}
            priority
          />
        </section>
        <section className="bg-[#E2E2E2]">
          <div className="container flex flex-col items-center justify-center gap-[40px] pb-[60px] pt-[40px] sm:pb-[80px] sm:pt-[60px] lg:gap-[70px] lg:pb-[120px] lg:pt-[100px]">
            <Image
              width={1216}
              height={700}
              layout="responsive"
              src="/img/work/tennis/tablet.png"
              alt=""
            />
            <div className="grid grid-cols-3 gap-[10px] xs:gap-[20px] sm:gap-[30px] lg:gap-[72px]">
              <Image
                width={317}
                height={626}
                src="/img/work/tennis/mob1.png"
                alt=""
              />
              <Image
                width={317}
                height={626}
                src="/img/work/tennis/mob2.png"
                alt=""
              />
              <Image
                width={317}
                height={626}
                src="/img/work/tennis/mob3.png"
                alt=""
              />
            </div>
            <Image
              width={1010}
              height={774}
              layout="responsive"
              src="/img/work/tennis/tablet2.png"
              alt=""
            />
          </div>
        </section>

        <section className="flex w-full items-center justify-between bg-white">
          <div className="container flex flex-col items-center justify-center gap-[40px] pb-[60px] pt-[40px] sm:pb-[80px] sm:pt-[60px] lg:gap-[90px] lg:pb-[120px] lg:pt-[100px]">
            <Image
              width={1216}
              height={683}
              src="/img/work/tennis/tablet3.png"
              alt=""
            />
            <div className="grid grid-cols-1 gap-[60px] sm:grid-cols-2 sm:gap-[20px]">
              <Image
                width={598}
                height={780}
                src="/img/work/tennis/mob5.png"
                alt=""
              />
              <Image
                width={598}
                height={780}
                src="/img/work/tennis/mob4.png"
                alt=""
              />
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
            <div className="flex w-full justify-center border-b border-b-[#656565]">
              <div className="md:w-[458px]sm:pb-0 relative w-full overflow-hidden bg-[#E3E3E3] pb-[50%] sm:h-[calc(180px)] sm:w-[358px] sm:pb-0 md:h-[200px] md:w-[458px] lg:h-[200px] lg:w-[600px]">
                <img
                  className="absolute -bottom-[50%] left-[20px] w-[calc(100%-40px)] lg:-bottom-[125%]"
                  src="/img/work/medical-dashboard/preview.png"
                />
              </div>
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
