import { getFilteredDrinks } from "@/lib/actions/drinks.actions";
import Hero from "@/components/homepage/Hero";
import AllDrinks from "@/components/homepage/AllDrinks";

export default async function Home() {
  const drinks = await getFilteredDrinks({ filter: "all" });
  return (
    <main className="flex min-h-screen flex-col items-center pb-[6.25rem] pt-24 xl:pt-4">
      <Hero />
      <AllDrinks data={drinks} />
    </main>
  );
}
