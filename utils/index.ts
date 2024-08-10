import {
  DrinkData,
  DrinkKey,
  FullDrinkData,
  FullDrinkResponseType,
} from "@/types/drinks.index";

export const getListOfItems = ({
  data,
  key,
}: {
  data: FullDrinkResponseType;
  key: "strIngredient" | "strMeasure";
}): string[] => {
  const list: string[] = [];
  for (let i = 1; i <= 15; i++) {
    const item = data[`${key}${i}` as DrinkKey];
    if (item) {
      list.push(item);
    }
  }
  return list;
};

export const formatFullDrinkData = ({
  data,
}: {
  data: { drinks: FullDrinkResponseType[] };
}): FullDrinkData => {
  const drinkData = data.drinks[0];
  const ingredients = getListOfItems({ data: drinkData, key: "strIngredient" });
  const measures = getListOfItems({ data: drinkData, key: "strMeasure" });
  const instructions = drinkData.strInstructions.split(".");

  return {
    name: drinkData.strDrink,
    image: drinkData.strDrinkThumb,
    instructions,
    glassType: drinkData.strGlass,
    category: drinkData.strCategory,
    ingredients,
    measures,
  };
};

export const formatDrinksData = ({
  data,
}: {
  data: FullDrinkResponseType;
}): DrinkData => {
  const { idDrink, strDrink, strDrinkThumb } = data;
  return {
    id: idDrink,
    name: strDrink,
    image: strDrinkThumb,
  };
};
