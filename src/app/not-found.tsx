import Image from "next/image";
import { SlideOnScroll } from "@/components/logics/SlideOnScroll";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
export default function Home() {
  return (
    <>
      <div className="absolute left-0 top-0 z-10 w-full">
        <header className="font-inter container flex items-center justify-between pt-10 text-[17px] font-medium text-blackText sm:text-[18px]">
          <Link href="/" className="animate__animated animate__fadeIn">
            © Alina Gavrilovich
          </Link>
          <nav className="animate__animated animate__fadeIn hidden items-center gap-11 text-blackText md:flex">
            <Link href="/work">Work</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
      </div>
      <main className="flex flex-col">
        <section className="relative flex flex-col items-center bg-grayBg pt-[70px]">
          <div className="relative flex uppercase">
            <div className="animate-left absolute -left-full top-[110px] z-10 whitespace-nowrap text-[160px] font-bold leading-[80%] text-blackTitle sm:text-[200px] md:top-[152px] lg:text-[280px]">
              Web ui ux Web ui ux Web ui ux Web ui ux Web ui ux Web ui ux Web ui
              ux Web ui ux Web ui ux Web ui ux
            </div>
            <div className="z-20 h-[600px] w-[583px] lg:h-[800px] lg:w-[777px]">
              <Image src="/img/portrait/photo_1.webp" alt="" layout="fill" />
            </div>

            <div className="animate-right absolute -right-full bottom-[150px] z-20 whitespace-nowrap text-[160px] font-bold leading-[80%] text-white opacity-85 sm:text-[200px] md:bottom-[112px] lg:bottom-[152px] lg:text-[280px]">
              Designer Designer Designer Designer Designer Designer Designer
              Designer Designer Designer
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-20">
            <div className="container flex flex-col items-end pb-10 md:flex-row md:items-center md:justify-between">
              <span className="font-inter animate__animated animate__fadeIn text-[17px] font-medium text-white sm:text-[18px] lg:text-blackText">
                Located in&nbsp;Belarus
              </span>
              <span className="font-inter animate__animated animate__fadeIn text-[17px] font-medium text-white sm:text-[18px] lg:text-blackText">
                Design &amp;&nbsp;Development
              </span>
            </div>
          </div>
        </section>
        <section className="py-[60px] sm:py-[80px] lg:py-[120px]">
          <div className="font-inter container flex flex-col justify-between font-medium text-blackText sm:flex-row">
            <div className="sm:mr-[20px]">
              <p className="mb-[24px] max-w-[880px] text-[24px] sm:text-[30px] lg:mb-[30px] lg:text-[40px]">
                Design can fascinatingly change our decisions and emotions. It&nbsp;converts website visitors into your customers
              </p>
              <span className="hidden text-[18px] sm:flex">
                Passionate about creating intuitive digital solutions
              </span>
            </div>

            <div className="flex flex-col xs:flex-row">
              <span className="mb-[30px] max-w-[240px] text-[17px] xs:max-w-[190px] sm:hidden">
                Passionate about creating intuitive digital solutions
              </span>
              <Link
                className="ml-auto flex h-[180px] w-[180px] min-w-[180px] cursor-pofont-inter items-center justify-center rounded-full bg-blue text-lg text-white transition hover:bg-blueHover"
                href="/about"
              >
                About me
              </Link>
            </div>
          </div>
          <div>
            <div className="mb-[40px] text-[18px] font-medium text-[#A5A5A5] lg:mb-[30px]">
              Recent work
            </div>
            <ul className="border-b border-b-grayBorder font-medium text-blackText">
              <li className="flex cursor-pofont-inter items-center justify-between border-t border-t-grayBorder px-20 py-[70px] transition-all hover:px-10 hover:opacity-50">
                <div className="text-[40px] uppercase">
                  Dental clinic Ortodent
                </div>
                <div className="font-inter text-lg">Design &amp;&nbsp;Development</div>
              </li>
              <li className="group relative flex cursor-pofont-inter items-center justify-between overflow-hidden border-t border-t-grayBorder px-20 py-[70px] transition-all hover:px-10 hover:opacity-50">
                {/* <div className='absolute bottom-0 left-[60%] flex h-[250px] w-[250px] translate-y-full items-center justify-center bg-[#213D5C] transition-all group-hover:translate-y-0'>
                  <div className='relative h-[124px] w-[210px]'>
                    <Image src='/recentWork/work_1.webp' layout='fill' alt='' />
                  </div>
                </div> */}

                <div className="text-[40px] uppercase">Tennis club</div>
                <div className="font-inter text-lg">Design &amp;&nbsp;Development</div>
              </li>
              <li className="flex cursor-pofont-inter items-center justify-between border-t border-t-grayBorder px-20 py-[70px] transition-all hover:px-10 hover:opacity-50">
                <div className="text-[40px] uppercase">Medical Dasnboard</div>
                <div className="font-inter text-lg">Design</div>
              </li>
            </ul>

            <Link
              href="/work"
              className="mx-auto mb-40 mt-[60px] flex h-[180px] w-[180px] items-center justify-center rounded-full border border-grayBorder bg-white text-lg font-medium text-blackText"
            >
              More work
            </Link>
            <div
              className="relative hidden flex-col gap-5 pb-[calc(36%+20px)] md:flex"
              id="scroll-slider"
            >
              <div
                className="absolute right-0 top-0 flex w-[120%] gap-5"
                id="scroll-slider-item-1"
              >
                <div className="flex w-1/4 bg-[#E7E8EA] pt-[15%]"></div>
                <div className="flex w-1/4 bg-[#E7E8EA] pt-[15%]"></div>
                <div className="flex w-1/4 bg-[#E7E8EA] pt-[15%]"></div>
                <div className="flex w-1/4 bg-[#E7E8EA] pt-[15%]"></div>
              </div>
              <div
                className="absolute bottom-0 left-0 flex w-[120%] gap-5"
                id="scroll-slider-item-2"
              >
                <div className="flex w-1/4 bg-[#E7E8EA] pt-[15%]"></div>
                <div className="flex w-1/4 bg-[#E7E8EA] pt-[15%]"></div>
                <div className="flex w-1/4 bg-[#E7E8EA] pt-[15%]"></div>
                <div className="flex w-1/4 bg-[#E7E8EA] pt-[15%]"></div>
              </div>
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
      <SlideOnScroll />
    </>
  );
}
