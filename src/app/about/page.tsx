import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <div className='absolute left-0 top-0 z-10 w-full'>
        <header className='inter container flex items-center justify-between pt-10 text-lg font-medium text-white'>
          <Link className='animate__animated animate__fadeIn' href='/'>
            © Alina Gavrilovich
          </Link>
          <nav className='animate__animated animate__fadeIn flex items-center gap-11 text-white'>
            <Link href='/work'>Work</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
          </nav>
        </header>
      </div>
      <main className='flex flex-col'>
        <section className='bg-blackBg pb-[100px] pt-[140px]'>
          {/* <div className='container'>
            <div className='flex items-center justify-center gap-6'>
              <svg
                className='mt-8 hidden h-6 w-6 text-white'
                width='24'
                height='24'
              >
                <use href='src/assets/icons.svg#icon-arrow'></use>
              </svg>
              <div className='xl:pr-[120px] xl:text-[150px] text-[14vw] font-bold uppercase leading-[1.1] text-white'>
                Helping
              </div>
            </div>
            <div className='xl:justify-between flex flex-col items-center gap-6'>
              <div className='xl:text-[150px] text-[14vw] font-bold uppercase leading-[1.1] text-white'>
                C<span className='text-blueHover'>o</span>mpanies
              </div>
              <div className='inter xl:text-lg hidden text-sm font-medium text-white'>
                I create tailored websites for small businesses and start-ups to
                help them reach bigger audiences
              </div>
            </div>
            <div className='flex flex-col items-center justify-between'>
              <div className='inter xl:text-lg hidden text-sm font-medium text-white'>
                I have been creating customized websites for over 2 years. It is
                important for me to do my work not just well, but better than
                others, for this purpose I am constantly improving my skills.
              </div>
              <div className='xl:text-[150px] text-[14vw] font-bold uppercase leading-[1.1] text-blueHover'>
                Thrive
              </div>
            </div>
          </div> */}
        </section>
        <section className='pt-[60px] sm:pt-[80px] lg:pt-[120px]'>
          <div className='container flex flex-col gap-[32px] sm:gap-[40px] lg:flex-row lg:gap-[20px]'>
            <div className='flex flex-col'>
              <h2 className='inter mb-[20px] text-lg font-medium leading-[121%] text-grayFooterText sm:mb-[30px]'>
                My services
              </h2>
              <ul className='border-t border-t-grayBorder'>
                <li className='flex flex-col gap-5 border-b border-b-grayBorder pb-[30px] pt-[24px] sm:pb-[40px] lg:pt-[30px]'>
                  <div className='text-[24px] font-medium uppercase leading-[132%] text-blackText sm:text-[40px]'>
                    Design
                  </div>
                  <p className='inter text-[17px] font-medium leading-[121%] text-blackText sm:text-[18px]'>
                    With a solid track record in designing websites, I deliver
                    strong and user-friendly digital designs
                  </p>
                </li>
                <li className='flex flex-col gap-5 border-b border-b-grayBorder py-10'>
                  <div className='font-medium uppercase leading-[132%] text-blackText sm:text-[40px]'>
                    Development
                  </div>
                  <p className='inter text-[17px] font-medium leading-[121%] text-blackText sm:text-[18px]'>
                    I build scalable websites from scratch that fit seamlessly
                    into the design. I pay special attention to
                    micro-animations, transitions, and interactions. I work with
                    the Tilda website builder
                  </p>
                </li>
                <li className='flex flex-col gap-5 border-b border-b-grayBorder py-10'>
                  <div className='font-medium uppercase leading-[132%] text-blackText sm:text-[40px]'>
                    The full package
                  </div>
                  <p className='inter text-[17px] font-medium leading-[121%] text-blackText sm:text-[18px]'>
                    A complete website from concept to implementation. My great
                    design sense and Tilda skills allow me to create amazing
                    projects
                  </p>
                </li>
              </ul>
            </div>

            <Image
              className='h-auto w-full lg:h-[740px] lg:w-1/2 lg:object-cover'
              src='/img/portrait/photo_about.png'
              alt=''
              objectFit='cover'
              width={700}
              height={740}
            />
          </div>
        </section>
        <section className='container py-[60px] md:py-[80px] lg:py-[120px]'>
          <ul className='grid grid-cols-2 gap-x-[10px] gap-y-[32px] xs:gap-x-[20px] sm:gap-y-[60px] md:grid-cols-4'>
            <li className='flex flex-col items-center gap-[8px] text-center sm:gap-[15px]'>
              <div className='inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue text-[18px] font-medium leading-[121%] text-white'>
                01
              </div>
              <div className='text-[24px] font-medium uppercase leading-[133%] text-[#404040] md:text-[30px]'>
                interview
              </div>
              <div className='inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]'>
                brief
              </div>
              <div className='inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]'>
                statement of work
              </div>
            </li>
            <li className='flex flex-col items-center gap-[8px] text-center sm:gap-[15px]'>
              <div className='inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue text-[18px] font-medium leading-[121%] text-white'>
                02
              </div>
              <div className='text-[24px] font-medium uppercase leading-[133%] text-[#404040] md:text-[30px]'>
                research
              </div>
              <div className='inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]'>
                JTBD
              </div>
              <div className='inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]'>
                competitor analysis
              </div>
            </li>
            <li className='flex flex-col items-center gap-[8px] text-center sm:gap-[15px]'>
              <div className='inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue text-[18px] font-medium leading-[121%] text-white'>
                03
              </div>
              <div className='text-[24px] font-medium uppercase leading-[133%] text-[#404040] md:text-[30px]'>
                Analytics
              </div>
              <div className='inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]'>
                CJM
              </div>
              <div className='inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]'>
                target audience
              </div>
            </li>
            <li className='flex flex-col items-center gap-[8px] text-center sm:gap-[15px]'>
              <div className='inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue text-[18px] font-medium leading-[121%] text-white'>
                04
              </div>
              <div className='text-[24px] font-medium uppercase leading-[133%] text-[#404040] md:text-[30px]'>
                User Flow
              </div>
              <div className='inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]'>
                task flow
              </div>
              <div className='inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]'>
                sketching
              </div>
            </li>
            <li className='flex flex-col items-center gap-[8px] text-center sm:gap-[15px]'>
              <div className='inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue text-[18px] font-medium leading-[121%] text-white'>
                05
              </div>
              <div className='text-[24px] font-medium uppercase leading-[133%] text-[#404040] md:text-[30px]'>
                UI design
              </div>
              <div className='inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]'>
                layout drawing and UI kit
              </div>
            </li>
            <li className='flex flex-col items-center gap-[8px] text-center sm:gap-[15px]'>
              <div className='inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue text-[18px] font-medium leading-[121%] text-white'>
                06
              </div>
              <div className='text-[24px] font-medium uppercase leading-[133%] text-[#404040] md:text-[30px]'>
                Prototype
              </div>
              <div className='inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]'>
                сreating a clickable <br /> prototype
              </div>
            </li>
            <li className='flex flex-col items-center gap-[8px] text-center sm:gap-[15px]'>
              <div className='inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue text-[18px] font-medium leading-[121%] text-white'>
                07
              </div>
              <div className='text-[24px] font-medium uppercase leading-[133%] text-[#404040] md:text-[30px]'>
                Adaptive
              </div>
              <div className='inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]'>
                design adaptation for all <br /> resolutions
              </div>
            </li>
            <li className='flex flex-col items-center gap-[8px] text-center sm:gap-[15px]'>
              <div className='inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue text-[18px] font-medium leading-[121%] text-white'>
                08
              </div>
              <div className='text-[24px] font-medium uppercase leading-[133%] text-[#404040] md:text-[30px]'>
                layout
              </div>
              <div className='inter text-[17px] font-medium leading-[121%] text-[#404040] sm:text-[18px]'>
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
