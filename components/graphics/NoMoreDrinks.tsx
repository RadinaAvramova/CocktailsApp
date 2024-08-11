import Image from "next/image";

const NoMoreDrinks = () => {
  return (
    <figure className="flex flex-col items-center gap-4">
      <Image
        src="/no-more-drinks.png"
        height={180}
        width={180}
        alt="
    A graphic of a spilling cocktail glass, indicating no more drinks are available
        "
      />
      <figcaption>
        <p className="medium-20 "> No more drinks available!</p>
      </figcaption>
    </figure>
  );
};

export default NoMoreDrinks;
