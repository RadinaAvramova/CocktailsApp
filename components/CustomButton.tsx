"use client";

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import { CustomButtonProps } from "@/types/drinks.index";
import { cn } from "@/lib/utils";

const CustomButton = ({
  additionalStyles,
  children,
  handleClick,
  scrollTo,
  link,
}: CustomButtonProps) => {
  if (scrollTo) {
    return (
      <ScrollLink
        activeClass="active"
        to={scrollTo}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className={cn(
          "flex-center custom-button text-slate-dark",
          additionalStyles
        )}
      >
        {children}
      </ScrollLink>
    );
  }

  if (link) {
    return (
      <Link
        href={link}
        className={cn(
          "flex-center custom-button text-slate-dark",
          additionalStyles
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={additionalStyles} onClick={handleClick}>
      {children}
    </button>
  );
};

export default CustomButton;
