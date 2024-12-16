type Item = {
  title: string;
  value: string;
};

export default function MainTitleList({ items }: { items: Item[] }) {
  return (
    <ul className="flex flex-col md:flex-row justify-between lg:flex-col lg:justify-normal w-full">
      {items.map(({ title, value }, i) => (
        <li
          className="flex items-center lg:items-start sm:flex-row lg:flex-col inter mb-[16px] lg:mb-[5px]"
          key={i}
        >
          <div className="border-b border-[#C3C6CC] pb-[8px]">
            <span className="text-[#C3C6CC] text-[17px] sm:text-[18px] mr-[8px] sm:mr-[12px]">
              {title}
            </span>
            <span className="text-[#404040] text-[17px] sm:text-[18px] font-medium">
              {value}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
