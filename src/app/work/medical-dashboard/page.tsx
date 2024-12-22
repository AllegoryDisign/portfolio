import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import MainTitleList from "@/components/MainTitleList";
import { Svg } from "@/components/Svg";
import { MainSection1 } from "@/components/sections/MainSection1";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <MainSection1
          title={
            <>
              <span className="text-[#362EEC]">Med</span>ical
            </>
          }
          subTitle={
            <>
              Dashb<span className="text-[#362EEC]">o</span>ard
            </>
          }
          table={[
            { title: "Year:", value: "2024" },
            { title: "Services:", value: "Design" },
            { title: "Industry::", value: "Medical / Healthcare" },
          ]}
        />
        <section className=" bg-[#254078]">
          <Image
            src="/img/work/medical-dashboard/dashboard.png"
            width={1015}
            height={818}
            alt=""
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
