import React from "react";

export type FullDrinkResponseType = {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string | null;
  strTags: string | null;
  strVideo: string | null;
  strCategory: string;
  strIBA: string | null;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES: string | null;
  strInstructionsDE: string | null;
  strInstructionsFR: string | null;
  strInstructionsIT: string | null;
  "strInstructionsZH-HANS": string | null;
  "strInstructionsZH-HANT": string | null;
  strDrinkThumb: string;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strImageSource: string | null;
  strImageAttribution: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
  [key: string]: string | null;
};

export type SmallDrinkResponseType = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

export type FullDrinkData = {
  name: string;
  image: string | null;
  instructions: string[];
  glassType: string;
  category: string;
  ingredients: string[];
  measures: string[];
};

export type DrinkData = {
  id: string;
  name: string;
  image: string;
};

export type DrinkDataResponse = {
  drinks: DrinkData[];
  isMorePosts: boolean;
  skip: number;
};

export type CustomButtonProps = {
  additionalStyles?: string;
  children: React.ReactNode;
  handleClick?: () => void;
  scrollTo?: string;
  link?: string;
};

export type AccordionTemplateProps = {
  data: string[];
  title: string;
  open?: boolean;
};

export type AccordionDataType = { title: string; items: string[] };

export type DrinkKey = `strIngredient${number}` | `strMeasure${number}`;

export type DrinksFilter = "all" | "popular" | "latest" | "non-alcoholic";

export type HomePageFiltersProps = {
  handleTitleChange: (filter: DrinksFilter) => void;
  filter: DrinksFilter;
};

export type DrinkCardProps = {
  drink: DrinkData;
  delay?: number;
  index: number;
};

export type fetchFunctionProps = {
  skip?: number;
  filter: DrinksFilter;
};

export type GetDrinkByNameType = {
  drinkData: FullDrinkData;
  similarDrinks: DrinkData[];
};

export type useFetchProps = {
  data: DrinkDataResponse;
  fn: ({ skip, filter }: fetchFunctionProps) => Promise<DrinkDataResponse>;
};

export type fetchMoreDrinksProps = {
  numberToSkip?: number;
  newFilter?: DrinksFilter;
};

export type DrinksChoices = {
  title: string;
  filter: string;
  suffix: string;
  image: string;
};

export type DrinkDataState = {
  drinks: DrinkData[];
  isMorePosts: boolean;
  skip: number;
  fetching: boolean;
  filter: DrinksFilter;
};
