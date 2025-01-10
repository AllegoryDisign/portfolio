"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import SendEmailPopup from "../popups/SendEmailPopup";
import { useState } from "react";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export function ContactSection() {
  const { register, handleSubmit } = useForm<FormData>();
  const [i, setI] = useState<boolean>(false);

  function onSubmit(data: FormData) {
    sendEmail(data);
    setI(true);
  }

  function close() {
    setI(false);
  }

  return (
    <>
      <section
        id="contact"
        className="bg-blackBg pb-[60px] pt-[60px] sm:pb-[80px] sm:pt-[80px] lg:pb-[120px] lg:pt-[100px]"
      >
        <div className="container">
          <div className="flex flex-col sm:gap-[20px] md:flex-row">
            <h2 className="max-w-[750px] flex-shrink-0 text-left text-[48px] font-bold uppercase leading-[120%] tracking-normal text-white sm:mb-0 sm:text-[56px] lg:text-[120px]">
              Let&apos;s <span className="text-blueHover">work</span> <br />
              together
            </h2>
            <div>
              <p className="inter mt-6 flex-grow text-[17px] font-medium leading-[120%] text-white sm:mt-0 sm:text-[18px] md:mt-[13px] md:max-w-[450px] md:text-right lg:mt-[27px] lg:max-w-[393px] lg:text-right">
                Thank you for taking the time to view my site and getting in
                touch, you&apos;ve taken the first step in taking your business
                to the next level. If you have a project in mind, shoot me a
                message and I will get back to you shortly
              </p>
              <span>\-</span>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative mt-[60px] flex flex-col justify-between gap-[40px] sm:flex-row sm:items-end"
          >
            <div className="flex w-full flex-col gap-[24px] sm:gap-[40px] lg:w-3/4 lg:gap-[70px]">
              <div className="flex flex-col gap-[24px] sm:flex-row sm:gap-[20px] lg:gap-[120px]">
                <div className="inter flex w-full flex-col gap-[10px] text-[17px] font-medium text-white sm:w-1/2 sm:text-[18px]">
                  Name *
                  <input
                    className="active::border-blueHover rounded border border-grayInput bg-transparent px-3 py-[7px] outline-none placeholder:text-white placeholder:opacity-0 focus:border-blueHover"
                    placeholder="John Doe"
                    type="text"
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="inter flex w-full flex-col gap-[10px] text-[17px] font-medium text-white sm:w-1/2 sm:text-[18px]">
                  Email *
                  <input
                    className="active::border-blueHover rounded border border-grayInput bg-transparent px-3 py-[7px] outline-none placeholder:text-white placeholder:opacity-0 focus:border-blueHover"
                    placeholder="john.doe@gmail.com"
                    type="email"
                    {...register("email", { required: true })}
                  />
                </div>
              </div>
              <div className="inter flex flex-col gap-[10px] text-[17px] font-medium text-white sm:w-1/2 sm:text-[18px] md:w-[70%] lg:w-full">
                Message *
                <textarea
                  className="active::border-blueHover h-[162px] resize-none rounded border border-grayInput bg-transparent px-3 py-2 outline-none placeholder:text-white placeholder:opacity-0 focus:border-blueHover"
                  placeholder="We need design now!"
                  {...register("message", { required: true })}
                ></textarea>
              </div>
            </div>
            <button
              className="inter mx-auto flex h-[180px] w-[180px] items-center justify-center rounded-full bg-blue text-lg font-medium text-white outline-none transition hover:bg-blueHover sm:absolute sm:bottom-0 sm:right-0"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      {i && <SendEmailPopup close={close} />}
    </>
  );
}
