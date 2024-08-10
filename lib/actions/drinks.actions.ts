"use server";

import {
  FullDrinkResponseType,
  DrinkData,
  DrinkDataResponse,
  fetchFunctionProps,
  GetDrinkByNameType,
} from "@/types/drinks.index";
import { formatFullDrinkData, formatDrinksData } from "@/utils";
import { drinksChoices } from "@/constants";

export async function getFilteredDrinks({
  skip = 0,
  filter,
}: fetchFunctionProps): Promise<DrinkDataResponse> {
  const drink = drinksChoices.find((choice) => choice.filter === filter);
  const suffix = drink?.suffix ?? drinksChoices[0].suffix;

  try {
    const response = await fetch(`${process.env.API_BASE_URL}${suffix}`);
    const responseJson = await response.json();
    const formattedData = responseJson.drinks.map(
      (data: FullDrinkResponseType) => {
        return formatDrinksData({ data });
      }
    );

    const isMorePosts = formattedData.length > skip + 9;

    return {
      drinks: formattedData.slice(skip, skip + 9),
      isMorePosts,
      skip: skip + 9,
    };
  } catch (error) {
    console.error(error);
    throw new Error();
  }
}

export async function getDrinkById(id: number): Promise<GetDrinkByNameType> {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}lookup.php?i=${id}`
    );

    const responseJson = await response.json();
    const formattedData = formatFullDrinkData({ data: responseJson });

    const nameWithSpaces = formattedData.name.replace(/%20/g, " ");

    const popularDrinks = await fetch(`${process.env.API_BASE_URL}popular.php`);
    const similarDrinksJson = await popularDrinks.json();

    const formattedSimilarDrinks = similarDrinksJson.drinks
      .reduce((acc: DrinkData[], data: FullDrinkResponseType) => {
        if (data.strDrink !== nameWithSpaces) {
          acc.push(formatDrinksData({ data }));
        }
        return acc;
      }, [])
      .slice(0, 9);

    return {
      drinkData: formattedData,
      similarDrinks: formattedSimilarDrinks,
    };
  } catch (error) {
    console.error(error);
    throw new Error();
  }
}

export async function getDrinksByIngredient(
  ingredient: string
): Promise<DrinkData[]> {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}filter.php?i=${ingredient}`
    );
    const responseJson = await response.json();
    const formattedData = responseJson.drinks.map(
      (data: FullDrinkResponseType) => {
        return formatDrinksData({ data });
      }
    );
    return formattedData;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
}
