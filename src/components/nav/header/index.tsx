import Logo from "../../../../public/logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="bg-sockBlack">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://socks4cocks.org/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={Logo}
            alt="Socks For Cocks"
            quality={95}
            className="rounded-2xl"
            width={40}
            height={40}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-cluckOrange">
            Socks For Cocks
          </span>
        </a>
      </div>
    </nav>
  );
}
