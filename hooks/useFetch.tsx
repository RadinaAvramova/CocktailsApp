import { useReducer } from "react";

import {
  DrinksFilter,
  fetchMoreDrinksProps,
  useFetchProps,
} from "@/types/drinks.index";
import { drinksReducer, initialState } from "@/reducers/drinksReducer";

const useFetch = ({ data, fn }: useFetchProps) => {
  const [state, dispatch] = useReducer(drinksReducer, {
    ...initialState,
    drinks: data.drinks,
    isMorePosts: data.isMorePosts,
    skip: data.skip,
  });

  const fetchMoreDrinks = async ({
    numberToSkip = state.skip,
    newFilter = state.filter,
  }: fetchMoreDrinksProps = {}) => {
    if ((!state.isMorePosts && numberToSkip > 0) || state.fetching) return;

    try {
      dispatch({ type: "SET_FETCHING", payload: true });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newDrinks = await fn({ skip: numberToSkip, filter: newFilter });
      dispatch({
        type: "SET_NEW_DRINKS",
        payload: {
          drinks: newDrinks.drinks,
          isMorePosts: newDrinks.isMorePosts,
          skip: numberToSkip + 9,
        },
      });
    } catch (error) {
      console.error("Error fetching more drinks", error);
    } finally {
      dispatch({ type: "SET_FETCHING", payload: false });
    }
  };

  const updateStateAndFetch = async (newFilter: string) => {
    dispatch({
      type: "RESET_AND_SET_FILTER",
      payload: newFilter as DrinksFilter,
    });
    fetchMoreDrinks({ numberToSkip: 0, newFilter: newFilter as DrinksFilter });
  };

  return {
    state,
    dispatch,
    fetchMoreDrinks,
    updateStateAndFetch,
  };
};

export default useFetch;
