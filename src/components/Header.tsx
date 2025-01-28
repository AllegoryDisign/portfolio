"use client";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import Magnetic from "./logics/Magnetic";
import { usePathname } from "next/navigation";
// header
export function Header() {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="absolute left-0 top-0 z-50 w-full">
      <header className="container flex items-center justify-between pt-10 text-[17px] font-medium text-blackText sm:text-[18px]">
        <Link href="/" className="animate__animated animate__fadeIn font-inter">
          © Alina Gavrilovich
        </Link>
        <div>
          <Magnetic>
            <div className="flex fixed top-[20px] right-[20px]  z-[1000] md:hidden">
              <button
                className={clsx(
                  "magnetic flex items-center justify-center w-[60px] h-[60px] border border-[#656565] rounded-full transition-all",
                  isOpen ? "bg-[#3E4EFF] border-[#3E4EFF]" : "bg-[#26292E]"
                )}
                onClick={() => setOpen(!isOpen)}
              >
                <div className="menu-wrapper w-[60px] h-[60px]">
                  <div
                    className={clsx("hamburger-menu", isOpen && "active")}
                  ></div>
                </div>
              </button>
            </div>
          </Magnetic>

          <nav className="animate__animated animate__fadeIn hidden items-center gap-11 text-blackText md:flex font-inter">
            <Link
              className={clsx("hover:text-[#362EEC]", {
                "text-[#2E4EEC]": pathname.includes("/work"),
              })}
              href="/work"
            >
              Work
            </Link>
            <Link
              className={clsx("hover:text-[#362EEC]", {
                "text-[#2E4EEC]": pathname.includes("/about"),
              })}
              href="/about"
            >
              About
            </Link>
            <Link className="hover:text-[#362EEC]" href="/#contact">
              Contact
            </Link>
          </nav>
        </div>
        <div
          className={clsx(
            "fixed md:hidden transition duration-700 bg-[#26292E] h-[360px] z-[100] w-full pt-[80px] pb-[30px] px-[20px] left-0 top-0",
            isOpen ? "-translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="text-[#A5A5A5] text-[17px] font-medium font-inter">
            Navigation
          </div>
          <hr className="border-none my-[24px] h-[1px] w-full bg-[#656565]" />
          <div className="flex justify-between text-white uppercase text-[24px] mb-[20px] font-medium">
            <Link
              className=" hover:text-[#3E4EFF] transition-all"
              href="/"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              className=" hover:text-[#3E4EFF] transition-all"
              href="/work"
              onClick={() => setOpen(false)}
            >
              Work
            </Link>
          </div>
          <div className="flex justify-between text-white uppercase text-[24px] mb-[24px]  font-medium">
            <Link
              className=" hover:text-[#3E4EFF] transition-all"
              href="/about"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              className=" hover:text-[#3E4EFF] transition-all"
              href="/#contact"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
          <a
            className="text-white text-[26px] font-inter hover:text-[#3E4EFF] transition-all"
            href="mailto:gavrilovich.ali@gmail.com"
          >
            gavrilovich.ali@gmail.com
          </a>
        </div>
      </header>
    </div>
  );
}
