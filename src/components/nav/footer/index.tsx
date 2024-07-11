import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDrumstickBite,
  faHandsPraying,
} from "@fortawesome/free-solid-svg-icons";
import { Disclaimer } from "@/components/disclaimer";

export default function Footer() {
  return (
    <footer className="bg-sockBlack text-cluckOrange">
      <div className="px-4 py-6 md:flex md:items-center md:justify-between">
        <span className="sm:text-center">
          © {new Date().getFullYear()} Socks For Cocks. All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
          <Disclaimer className="hover:text-cockRed hover:cursor-pointer" />
          <a
            target="_blank"
            href="https://mcchickers.com"
            className="hover:text-cockRed hover:cursor-pointer"
          >
            <FontAwesomeIcon icon={faDrumstickBite} />
            <span className="sr-only">McChickers</span>
          </a>
          <a
            target="_blank"
            href="https://chrisitian.com"
            className="hover:text-cockRed hover:cursor-pointer"
          >
            <FontAwesomeIcon icon={faHandsPraying} />
            <span className="sr-only">Chrisitian</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
