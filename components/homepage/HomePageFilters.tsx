import Image from "next/image";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

import { drinksChoices } from "@/constants";
import { DrinksFilter, HomePageFiltersProps } from "@/types/drinks.index";
import CustomButton from "../CustomButton";

const HomePageFilters = ({
  handleTitleChange,
  filter,
}: HomePageFiltersProps) => {
  const selectedChoice = drinksChoices.find(
    (choice) => choice.filter === filter
  );
  const title = selectedChoice?.title ?? drinksChoices[0].title;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="flex w-fit cursor-pointer">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="serif-heading"
        >
          {title}
          <ChevronDown size={20} className="ml-2 self-center" />
        </motion.h3>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 border-0 bg-slate-mid">
        <DropdownMenuGroup>
          {drinksChoices.map((choice) => (
            <DropdownMenuItem key={choice.filter} className="m-0 p-0">
              <CustomButton
                key={choice.filter}
                additionalStyles="h-[3rem] px-3 w-full w-full flex-between bg-slate-mid hover:bg-slate-light"
                handleClick={() =>
                  handleTitleChange(choice.filter as DrinksFilter)
                }
              >
                <span className="base-20 text-light-100">{choice.title}</span>
                <Image
                  src={choice.image}
                  height={30}
                  width={30}
                  alt={choice.title}
                />
              </CustomButton>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HomePageFilters;
