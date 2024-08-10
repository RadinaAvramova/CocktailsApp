import { DrinksChoices } from "@/types/drinks.index";

export const drinksChoices: DrinksChoices[] = [
  {
    title: "All Drinks",
    filter: "all",
    suffix: "filter.php?c=Ordinary_Drink",
    image: "/icons/all-drinks.png",
  },
  {
    title: "Popular Drinks",
    filter: "popular",
    suffix: "popular.php",
    image: "/icons/popular-drinks.png",
  },
  {
    title: "Latest Drinks",
    filter: "latest",
    suffix: "latest.php",
    image: "/icons/latest-drinks.png",
  },
  {
    title: "Non-Alcholic Drinks",
    filter: "non-alcoholic",
    suffix: "filter.php?a=Non_Alcoholic",
    image: "/icons/non-alcoholic.png",
  },
];
