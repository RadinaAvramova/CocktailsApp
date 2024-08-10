import Image from "next/image";

import CustomButton from "../CustomButton";

const ErrorGraphic = ({ errorPage }: { errorPage?: boolean }) => {
  return (
    <div className="vertical-center">
      <Image
        src="/wine-glass-error.gif"
        unoptimized
        height={238}
        width={332}
        alt="
Loading graphic of two wind glasses clinking together
    "
      />
      <h2 className="semibold-40 ">
        {errorPage ? "Oops! Something Went Wrong" : "Oops! Cocktail Not Found"}
      </h2>
      <p className="base-18 my-6 ">
        We can&apos;t find that cocktail recipe. Head back to explore more tasty
        options.
      </p>
      <CustomButton
        additionalStyles="flex-center bg-orange-light gap-2.5 h-[3.375rem] w-[17rem]"
        link="/"
      >
        <span className="medium-20">Explore More Cocktails</span>
        <Image
          src="/icons/arrow-down.svg"
          height={10}
          width={10}
          alt="Arrow pointing down"
        />
      </CustomButton>
    </div>
  );
};

export default ErrorGraphic;
