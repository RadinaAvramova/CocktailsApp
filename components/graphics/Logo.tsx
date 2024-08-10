"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import CustomButton from "../CustomButton";

const LogoContent = () => {
  return (
    <figure className="flex h-[2.3rem] items-end gap-2 bg-slate-dark">
      <Image
        src="/logo-drink-icon.png"
        width={25}
        height={38}
        alt="Drink Icon"
        className="object-contain"
      />
      <span className="base-24 font-serif text-light-200">
        COCKTAIL<span className="text-light-100"> CORNER</span>
      </span>
    </figure>
  );
};

const Logo = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <CustomButton scrollTo="hero" additionalStyles="bg-slate-dark h-[2.3rem]">
        <LogoContent />
      </CustomButton>
    );
  }

  return (
    <Link href="/" className="h-[2.3rem]">
      <LogoContent />
    </Link>
  );
};

export default Logo;
