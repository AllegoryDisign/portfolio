import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Svg } from "@/components/Svg";
import { Header } from "@/components/Header";

export default function About() {
  return (
    <>
      <Header isWhite />
      <main className="flex flex-col">
        <section className="bg-blackBg pb-[100px] pt-[140px]">
          <div className="container  relative">
            <h1 className=" text-[44px] font-bold leading-[110%] sm:text-[52px] md:text-[90px] xl:text-[150px] uppercase text-white mb-[10px] sm:mb-[16px] relative">
              <Svg
                className="absolute right-0 text-white rotate-90 hidden sm:flex mt-[8px] md:mt-[18px] xl:mt-[24px]"
                iconId="icon-arrow"
                width={30}
                height={30}
              />
              Helping <br />
              businesses
            </h1>
            <div className="flex flex-col lg:flex-row lg:items-center">
              <p className="font-medium font-inter text-[17px] md:text-[18px] text-white lg:mr-[60px] max-w-[598px]">
                I&nbsp;create tailored websites for small businesses and
                start-ups to&nbsp;help them reach bigger audiences. I&nbsp;have
                been creating customized websites for over 2&nbsp;years.
                It&nbsp;is&nbsp;important for
                me&nbsp;to&nbsp;do&nbsp;my&nbsp;work not just well, but better
                than others, for this purpose I&nbsp;am constantly improving
                my&nbsp;skills
              </p>
              <div className=" text-[44px] font-bold leading-[110%] sm:text-[52px] md:text-[90px] xl:text-[150px] uppercase text-[#362EEC] mb-[10px] sm:mb-[16px] text-right mt-[8px] lg:mt-0">
                thrive
              </div>
            </div>
          </div>
        </section>
        <section className="pt-[60px] sm:pt-[80px] lg:pt-[120px]">
          <div className="container flex flex-col gap-[32px] sm:gap-[40px] lg:flex-row lg:gap-[20px]">
            <div className="flex flex-col">
              <h2 className="font-inter mb-[20px] text-lg font-medium leading-[121%] text-grayFooterText sm:mb-[30px]">
                My services
              </h2>
              <ul className="border-t border-t-grayBorder">
                <li className="flex flex-col gap-5 border-b border-b-grayBorder pb-[30px] pt-[24px] sm:pb-[40px] lg:pt-[30px]">
                  <div className="text-[24px] font-medium uppercase leading-[132%] text-blackText sm:text-[40px]">
                    Design
                  </div>
                  <p className="font-inter text-[17px] font-medium leading-[121%] text-blackText sm:text-[18px]">
                    With a&nbsp;solid track record in&nbsp;designing websites,
                    I&nbsp;deliver strong and user-friendly digital designs
                  </p>
                </li>
                <li className="flex flex-col gap-5 border-b border-b-grayBorder py-10">
                  <div className="font-medium uppercase leading-[132%] text-blackText sm:text-[40px]">
                    Development
                  </div>
                  <p className="font-inter text-[17px] font-medium leading-[121%] text-blackText sm:text-[18px]">
                    I&nbsp;build scalable websites from scratch that fit
                    seamlessly into the design. I&nbsp;pay special attention
                    to&nbsp;micro-animations, transitions, and
                    font-interactions. I&nbsp;work with the Tilda website
                    builder
                  </p>
                </li>
                <li className="flex flex-col gap-5 md:border-b md:border-b-grayBorder pt-10 md:pb-10">
                  <div className="font-medium uppercase leading-[132%] text-blackText sm:text-[40px]">
                    The full package
                  </div>
                  <p className="font-inter text-[17px] font-medium leading-[121%] text-blackText sm:text-[18px]">
                    A&nbsp;complete website from concept to&nbsp;implementation.
                    My&nbsp;great design sense and Tilda skills allow
                    me&nbsp;to&nbsp;create amazing projects
                  </p>
                </li>
              </ul>
            </div>

            <Image
              className="h-auto w-full lg:h-[740px] lg:w-1/2 lg:object-cover"
              src="/img/portrait/photo_about.webp"
              alt=""
              objectFit="cover"
              quality={95}
              width={598}
              height={740}
            />
          </div>
        </section>
        <section className="container py-[60px] md:py-[80px] lg:py-[120px]">
          <ul className="grid grid-cols-2 gap-x-[10px] gap-y-[32px] sm:gap-y-[60px] md:grid-cols-4 xl:grid-cols-[186px_1fr_186px_1fr_186px_1fr_186px] sm:gap-x-[20px]">
            <li className="flex flex-col items-center gap-[8px] text-center sm:gap-[15px]">
              <div className="font-inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue text-[18px] font-medium leading-[121%] text-white">
                01
              </div>
              <div className="text-[24px] font-medium uppercase leading-[133%] text-[#404040] md:text-[30px]">
                interview
              </div>
              <div className="font-inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]">
                brief
              </div>
              <div className="font-inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]">
                statement of&nbsp;work
              </div>
            </li>
            <li className="hidden xl:flex">
              <hr className="mt-[143px] border-t-[#E5E0DC] flex-1" />
            </li>
            <li className="flex flex-col items-center gap-[8px] text-center sm:gap-[15px]">
              <div className="font-inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue text-[18px] font-medium leading-[121%] text-white">
                02
              </div>
              <div className="text-[24px] font-medium uppercase leading-[133%] text-[#404040] md:text-[30px]">
                research
              </div>
              <div className="font-inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]">
                JTBD
              </div>
              <div className="font-inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]">
                competitor analysis
              </div>
            </li>
            <li className="hidden xl:flex">
              <hr className="mt-[143px] border-t-[#E5E0DC]  flex-1" />
            </li>
            <li className="flex flex-col items-center gap-[8px] text-center sm:gap-[15px]">
              <div className="font-inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue text-[18px] font-medium leading-[121%] text-white">
                03
              </div>
              <div className="text-[24px] font-medium uppercase leading-[133%] text-[#404040] md:text-[30px]">
                Analytics
              </div>
              <div className="font-inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]">
                CJM
              </div>
              <div className="font-inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]">
                target audience
              </div>
            </li>
            <li className="hidden xl:flex">
              <hr className="mt-[143px] border-t-[#E5E0DC]  flex-1  " />
            </li>
            <li className="flex flex-col items-center gap-[8px] text-center sm:gap-[15px]">
              <div className="font-inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue text-[18px] font-medium leading-[121%] text-white">
                04
              </div>
              <div className="text-[24px] font-medium uppercase leading-[133%] text-[#404040] md:text-[30px]">
                User Flow
              </div>
              <div className="font-inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]">
                task flow
              </div>
              <div className="font-inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]">
                sketching
              </div>
            </li>

            <li className="flex flex-col items-center gap-[8px] text-center sm:gap-[15px]">
              <div className="font-inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue text-[18px] font-medium leading-[121%] text-white">
                05
              </div>
              <div className="text-[24px] font-medium uppercase leading-[133%] text-[#404040] md:text-[30px]">
                UI&nbsp;design
              </div>
              <div className="font-inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]">
                layout drawing and&nbsp;UI kit
              </div>
            </li>
            <li className="hidden xl:flex">
              <hr className="mt-[143px] border-t-[#E5E0DC]  flex-1" />
            </li>
            <li className="flex flex-col items-center gap-[8px] text-center sm:gap-[15px]">
              <div className="font-inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue text-[18px] font-medium leading-[121%] text-white">
                06
              </div>
              <div className="text-[24px] font-medium uppercase leading-[133%] text-[#404040] md:text-[30px]">
                Prototype
              </div>
              <div className="font-inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]">
                сreating a&nbsp;clickable prototype
              </div>
            </li>
            <li className="hidden xl:flex">
              <hr className="mt-[143px] border-t-[#E5E0DC]  flex-1  " />
            </li>
            <li className="flex flex-col items-center gap-[8px] text-center sm:gap-[15px]">
              <div className="font-inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue text-[18px] font-medium leading-[121%] text-white">
                07
              </div>
              <div className="text-[24px] font-medium uppercase leading-[133%] text-[#404040] md:text-[30px]">
                Adaptive
              </div>
              <div className="font-inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]">
                design adaptation for all resolutions
              </div>
            </li>
            <li className="hidden xl:flex">
              <hr className="mt-[143px] border-t-[#E5E0DC] flex-1" />
            </li>
            <li className="flex flex-col items-center gap-[8px] text-center sm:gap-[15px]">
              <div className="font-inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue text-[18px] font-medium leading-[121%] text-white">
                08
              </div>
              <div className="text-[24px] font-medium uppercase leading-[133%] text-[#404040] md:text-[30px]">
                layout
              </div>
              <div className="font-inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]">
                site layout on&nbsp;tilda builder
              </div>
            </li>
          </ul>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
