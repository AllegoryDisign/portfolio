import Link from "next/link";

export function Header() {
  return (
    <div className="absolute left-0 top-0 z-10 w-full">
      <header className="inter container flex items-center justify-between pt-10 text-[17px] font-medium text-blackText sm:text-[18px]">
        <Link href="/" className="animate__animated animate__fadeIn">
          © Alina Gavrilovich
        </Link>
        <nav className="animate__animated animate__fadeIn hidden items-center gap-11 text-blackText md:flex">
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>
    </div>
  );
}
