import Image from "next/image";

const LoadingGraphic = () => {
  return (
    <Image
      src="/wine-glasses.gif"
      unoptimized
      height={250}
      width={250}
      alt="
Loading graphic of two wind glasses clinking together
    "
    />
  );
};

export default LoadingGraphic;
