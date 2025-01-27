import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="absolute left-0 top-0 z-10 w-full">
        <header className="inter container flex items-center justify-between pt-10 text-lg font-medium text-white">
          <Link className="animate__animated animate__fadeIn" href="/">
            © Alina Gavrilovich
          </Link>
          <nav className="animate__animated animate__fadeIn flex items-center gap-11 text-white">
            <Link href="/work">Work</Link>
            <Link
              className={"hover:text-[#362EEC] text-[#2E4EEC]"}
              href="/about"
            >
              About
            </Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </header>
      </div>
      <main className="flex flex-col">
        <section className="bg-blackBg pb-[100px] pt-[140px]">
          <div className="container">
            <h1 className=" text-[44px] font-bold leading-[110%] sm:text-[52px] md:text-[90px] xl:text-[150px] uppercase text-white mb-[10px] sm:mb-[16px] ">
              Helping <br />
              businesses
            </h1>
            <div className="flex flex-col lg:flex-row lg:items-center">
              <p className="font-medium inter text-[17px] md:text-[18px] text-white lg:mr-[60px]">
                I create tailored websites for small businesses and start-ups
                to help them reach bigger audiences. I have been creating
                customized websites for over 2 years. It is important for
                me to do my work not just well, but better than others, for this
                purpose I am constantly improving my skills
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
              <h2 className="inter mb-[20px] text-lg font-medium leading-[121%] text-grayFooterText sm:mb-[30px]">
                My services
              </h2>
              <ul className="border-t border-t-grayBorder">
                <li className="flex flex-col gap-5 border-b border-b-grayBorder pb-[30px] pt-[24px] sm:pb-[40px] lg:pt-[30px]">
                  <div className="text-[24px] font-medium uppercase leading-[132%] text-blackText sm:text-[40px]">
                    Design
                  </div>
                  <p className="inter text-[17px] font-medium leading-[121%] text-blackText sm:text-[18px]">
                    With a solid track record in designing websites, I deliver
                    strong and user-friendly digital designs
                  </p>
                </li>
                <li className="flex flex-col gap-5 border-b border-b-grayBorder py-10">
                  <div className="font-medium uppercase leading-[132%] text-blackText sm:text-[40px]">
                    Development
                  </div>
                  <p className="inter text-[17px] font-medium leading-[121%] text-blackText sm:text-[18px]">
                    I build scalable websites from scratch that fit seamlessly
                    into the design. I pay special attention to
                    micro-animations, transitions, and interactions. I work with
                    the Tilda website builder
                  </p>
                </li>
                <li className="flex flex-col gap-5 border-b border-b-grayBorder py-10">
                  <div className="font-medium uppercase leading-[132%] text-blackText sm:text-[40px]">
                    The full package
                  </div>
                  <p className="inter text-[17px] font-medium leading-[121%] text-blackText sm:text-[18px]">
                    A complete website from concept to implementation. My great
                    design sense and Tilda skills allow me to create amazing
                    projects
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
          <ul className="grid grid-cols-2 gap-x-[10px] gap-y-[32px] xs:gap-x-[20px] sm:gap-y-[60px] md:grid-cols-4 lg:grid-cols-[186px_1fr_186px_1fr_186px_1fr_186px]">
            <li className="flex flex-col items-center gap-[8px] text-center sm:gap-[15px]">
              <div className="inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue text-[18px] font-medium leading-[121%] text-white">
                01
              </div>
              <div className="text-[24px] font-medium uppercase leading-[133%] text-[#404040] md:text-[30px]">
                interview
              </div>
              <div className="inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]">
                brief
              </div>
              <div className="inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]">
                statement of work
              </div>
            </li>
            <li className="hidden lg:flex">
              <hr className="mt-[143px] border-t-[#E5E0DC]" />
            </li>
            <li className="flex flex-col items-center gap-[8px] text-center sm:gap-[15px]">
              <div className="inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue text-[18px] font-medium leading-[121%] text-white">
                02
              </div>
              <div className="text-[24px] font-medium uppercase leading-[133%] text-[#404040] md:text-[30px]">
                research
              </div>
              <div className="inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]">
                JTBD
              </div>
              <div className="inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]">
                competitor analysis
              </div>
            </li>
            <li className="hidden lg:flex">
              <hr className="mt-[143px] border-t-[#E5E0DC]" />
            </li>
            <li className="flex flex-col items-center gap-[8px] text-center sm:gap-[15px]">
              <div className="inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue text-[18px] font-medium leading-[121%] text-white">
                03
              </div>
              <div className="text-[24px] font-medium uppercase leading-[133%] text-[#404040] md:text-[30px]">
                Analytics
              </div>
              <div className="inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]">
                CJM
              </div>
              <div className="inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]">
                target audience
              </div>
            </li>
            <li className="hidden lg:flex">
              <hr className="mt-[143px] border-t-[#E5E0DC]" />
            </li>
            <li className="flex flex-col items-center gap-[8px] text-center sm:gap-[15px]">
              <div className="inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue text-[18px] font-medium leading-[121%] text-white">
                04
              </div>
              <div className="text-[24px] font-medium uppercase leading-[133%] text-[#404040] md:text-[30px]">
                User Flow
              </div>
              <div className="inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]">
                task flow
              </div>
              <div className="inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]">
                sketching
              </div>
            </li>

            <li className="flex flex-col items-center gap-[8px] text-center sm:gap-[15px]">
              <div className="inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue text-[18px] font-medium leading-[121%] text-white">
                05
              </div>
              <div className="text-[24px] font-medium uppercase leading-[133%] text-[#404040] md:text-[30px]">
                UI design
              </div>
              <div className="inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]">
                layout drawing and UI kit
              </div>
            </li>
            <li className="hidden lg:flex">
              <hr className="mt-[143px] border-t-[#E5E0DC]" />
            </li>
            <li className="flex flex-col items-center gap-[8px] text-center sm:gap-[15px]">
              <div className="inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue text-[18px] font-medium leading-[121%] text-white">
                06
              </div>
              <div className="text-[24px] font-medium uppercase leading-[133%] text-[#404040] md:text-[30px]">
                Prototype
              </div>
              <div className="inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]">
                сreating a clickable <br /> prototype
              </div>
            </li>
            <li className="hidden lg:flex">
              <hr className="mt-[143px] border-t-[#E5E0DC]" />
            </li>
            <li className="flex flex-col items-center gap-[8px] text-center sm:gap-[15px]">
              <div className="inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue text-[18px] font-medium leading-[121%] text-white">
                07
              </div>
              <div className="text-[24px] font-medium uppercase leading-[133%] text-[#404040] md:text-[30px]">
                Adaptive
              </div>
              <div className="inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]">
                design adaptation for all <br /> resolutions
              </div>
            </li>
            <li className="hidden lg:flex">
              <hr className="mt-[143px] border-t-[#E5E0DC]" />
            </li>
            <li className="flex flex-col items-center gap-[8px] text-center sm:gap-[15px]">
              <div className="inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue text-[18px] font-medium leading-[121%] text-white">
                08
              </div>
              <div className="text-[24px] font-medium uppercase leading-[133%] text-[#404040] md:text-[30px]">
                layout
              </div>
              <div className="inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]">
                site layout on tilda <br /> builder
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
