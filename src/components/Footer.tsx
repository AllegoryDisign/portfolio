import CurrentTime from "./CurrT";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-t-grayInput bg-blackBg pt-[60px] md:pt-[80px] xl:pt-[100px] z-20">
      <div className="container flex flex-col items-center justify-between gap-[24px] sm:flex-row sm:flex-wrap sm:gap-[40px]">
        <div className="flex w-full justify-between sm:inline-flex sm:w-auto sm:flex-col sm:gap-[12px] lg:gap-[20px]">
          <span className="font-inter text-lg font-medium text-grayFooterText">
            Version
          </span>
          <span className="font-inter text-lg font-medium text-white text-opacity-85">
            © 2025, Alina Gavrilovich
          </span>
        </div>
        <div className="flex w-full justify-between sm:inline-flex sm:w-auto sm:flex-col sm:gap-[12px] lg:gap-[20px]">
          <span className="font-inter text-lg font-medium text-grayFooterText">
            Local time
          </span>
          <span className="font-inter text-lg font-medium text-white text-opacity-85">
            <CurrentTime />
          </span>
        </div>
        <div className="flex w-full justify-between sm:inline-flex sm:w-auto sm:flex-col sm:gap-[12px] lg:gap-[20px]">
          <span className="font-inter text-lg font-medium text-grayFooterText">
            Socials
          </span>
          <a
            href="https://t.me/Allegory23"
            className="font-inter text-lg font-medium text-white text-opacity-85"
          >
            Telegram
          </a>
        </div>

        <a
          className="font-inter mb-[20px] inline-flex justify-center text-[26px] font-normal text-white sm:mb-0 lg:text-[30px]"
          href="mailto:gavrilovich.ali@gmail.com"
        >
          gavrilovich.ali@gmail.com
        </a>
      </div>
      <div className="relative pt-[10%]">
        <div className="absolute bottom-0 left-0 z-10 w-full translate-y-1/2 text-center text-[14.5vw] font-bold uppercase text-white text-opacity-85">
          Gavrilovich
        </div>
      </div>
    </footer>
  );
}
