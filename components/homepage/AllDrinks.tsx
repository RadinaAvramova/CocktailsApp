"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { getFilteredDrinks } from "@/lib/actions/drinks.actions";
import { DrinkDataResponse, DrinksFilter } from "@/types/drinks.index";
import useFetch from "@/hooks/useFetch";
import LoadingGraphic from "../graphics/LoadingGraphic";
import NoMoreDrinks from "../graphics/NoMoreDrinks";
import DrinkCard from "../DrinkCard";
import CustomButton from "../CustomButton";
import HomePageFilters from "./HomePageFilters";

const AllDrinks = ({ data }: { data: DrinkDataResponse }) => {
  const { dispatch, state, fetchMoreDrinks, updateStateAndFetch } = useFetch({
    data,
    fn: getFilteredDrinks,
  });
  const { ref, inView } = useInView();
  const { drinks, fetching, isMorePosts, filter } = state;

  useEffect(() => {
    if (inView && isMorePosts) fetchMoreDrinks();
  }, [inView]);

  const loadMore = () => {
    if (isMorePosts) fetchMoreDrinks();
  };

  const handleTitleChange = (newFilter: string) => {
    if (newFilter === filter) return;
    dispatch({ type: "SET_FILTER", payload: newFilter as DrinksFilter });
    updateStateAndFetch(newFilter);
  };

  return (
    <section className="flex w-full justify-center px-5 xl:px-[6.25rem]">
      <div
        id="all-drinks"
        className="homepage-content-max-width mt-12 flex w-full flex-col gap-[1.875rem] xl:mt-[3.75rem] xl:min-h-[110rem] xl:gap-[3.125rem]"
      >
        <HomePageFilters
          handleTitleChange={handleTitleChange}
          filter={filter}
        />
        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 xl:grid-cols-3 xl:gap-y-[3.125rem]">
          {drinks.map((drink, i) => {
            const index = (i % 9) + 1;
            const delay = index * 0.1;
            return (
              <DrinkCard
                key={drink.id}
                drink={drink}
                delay={delay}
                index={index}
              />
            );
          })}
        </div>

        {!fetching && isMorePosts && (
          <CustomButton
            additionalStyles={
              "w-full h-10 xs:hidden bg-orange-light text-slate-dark"
            }
            handleClick={loadMore}
          >
            <span className="medium-20">See More</span>
          </CustomButton>
        )}

        <div className="flex-center min-h-40 w-full">
          {fetching && <LoadingGraphic />}
          {!isMorePosts && <NoMoreDrinks />}
          <div ref={ref} className="hidden h-10 xs:flex" />
        </div>
      </div>
    </section>
  );
};

export default AllDrinks;
