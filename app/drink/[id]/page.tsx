import { getDrinkById } from "@/lib/actions/drinks.actions";
import { AccordionDataType } from "@/types/drinks.index";
import AccordionTemplate from "@/components/drink-page/AccordionTemplate";
import Tag from "@/components/Tag";
import PopularDrinks from "@/components/drink-page/PopularDrinks";
import DrinkPageImage from "@/components/drink-page/DrinkPageImage";
import DrinkInfo from "@/components/drink-page/DrinkInfo";

const Drink = async ({ params }: { params: { id: string } }) => {
  const drink = await getDrinkById(+params.id);

  const { name, ingredients, instructions, glassType, category } =
    drink.drinkData;

  const accordionData: AccordionDataType[] = [
    { title: "INGREDIENTS", items: ingredients },
    { title: "INSTRUCTIONS", items: instructions },
    { title: "GLASS", items: [glassType] },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center gap-12 px-5 pb-[6.25rem] pt-20 lg:pt-28 xl:px-[6.25rem] ">
      <section className="homepage-content-max-width flex w-full flex-col gap-[1.875rem] xl:flex-row xl:gap-0">
        <div className="flex flex-col xl:hidden">
          {glassType && category && (
            <div className="flex gap-4">
              {glassType && <Tag title={glassType} />}
              {category && <Tag title={category} />}
            </div>
          )}
          <h3 className="semibold-40 mt-5 ">{name}</h3>
        </div>
        <DrinkPageImage data={drink.drinkData} />
        <aside className="flex w-full flex-col xl:pl-[3.75rem] xl:pt-5">
          <DrinkInfo data={drink.drinkData} />
          <AccordionTemplate data={accordionData} />
        </aside>
      </section>
      <PopularDrinks drinks={drink.similarDrinks} />
    </main>
  );
};

export default Drink;
