import { DrinkData, DrinkDataState, DrinksFilter } from "@/types/drinks.index";

export const initialState: DrinkDataState = {
  drinks: [],
  isMorePosts: true,
  skip: 0,
  fetching: false,
  filter: "all",
};

type Action =
  | { type: "SET_FETCHING"; payload: boolean }
  | { type: "SET_FILTER"; payload: DrinksFilter }
  | {
      type: "SET_NEW_DRINKS";
      payload: { drinks: DrinkData[]; isMorePosts: boolean; skip: number };
    }
  | { type: "RESET_AND_SET_FILTER"; payload: DrinksFilter };

export const drinksReducer = (
  state: DrinkDataState,
  action: Action
): DrinkDataState => {
  switch (action.type) {
    case "SET_FETCHING":
      return { ...state, fetching: action.payload };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    case "SET_NEW_DRINKS":
      return {
        ...state,
        drinks: [...state.drinks, ...action.payload.drinks],
        isMorePosts: action.payload.isMorePosts,
        skip: action.payload.skip,
      };
    case "RESET_AND_SET_FILTER":
      return {
        ...state,
        drinks: [],
        isMorePosts: true,
        skip: 0,
        filter: action.payload,
      };
    default:
      return state;
  }
};
