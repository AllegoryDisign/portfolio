import { ReactNode } from "react";
import MainTitleList from "../MainTitleList";
import { Svg } from "../Svg";

type Props = {
  title: ReactNode;
  subTitle: ReactNode;
  table: { title: string; value: string }[];
  arrow?: boolean;
};

export function MainSection1({ title, subTitle, table, arrow = false }: Props) {
  return (
    <section className="container pb-[50px] pt-[106px] lg:pt-[140px] lg:pb-[100px] md:pt-[122px] md:pb-[70px]">
      <div className="mb-[30px]">
        <div className="flex justify-between">
          <h1 className="flex font-bold text-[44px] text-[#404040] uppercase leading-[110%] sm:text-[60px] xl:text-[140px] lg:text-[105px] md:text-[90px]">
            {title}
          </h1>

          {arrow && (
            <Svg
              className=" rotate-90 text-[#2E4EEC] mt-[20px]"
              size={24}
              iconId="icon-arrow"
            />
          )}
        </div>

        <div className="flex lg:hidden font-bold text-[44px] uppercase leading-[110%] sm:text-[60px] xl:text-[150px] lg:text-[105px] md:text-[90px] mt-[4px] text-[#404040]">
          {subTitle}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <MainTitleList items={table} />
        <div className="font-bold text-[44px] uppercase leading-[110%] sm:text-[60px] xl:text-[140px] lg:text-[105px] md:text-[90px] hidden lg:flex flex-shrink-0 text-[#404040]">
          {subTitle}
        </div>
      </div>
    </section>
  );
}
