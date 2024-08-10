"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

import { AccordionDataType } from "@/types/drinks.index";

const AccordionTemplate = ({ data }: { data: AccordionDataType[] }) => {
  return (
    <ul className="xl:mt-10">
      <Accordion
        type="single"
        collapsible
        className="w-full gap-2"
        defaultValue={data[0].title}
      >
        {data.map((data: AccordionDataType, index: number) => {
          if (data.items[0] === "" || data.items[0] === undefined) return null;
          return (
            <AccordionItem
              key={data.title}
              value={data.title}
              className="mb-10"
            >
              <AccordionTrigger className="orange-heading cursor-pointer">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex-between w-full"
                >
                  <label className="cursor-pointer">{data.title}</label>
                  <ChevronDown className="size-4 shrink-0 transition-transform duration-200" />
                </motion.div>
              </AccordionTrigger>
              <AccordionContent className="mt-4 py-2">
                {data.items.map((ingredient: string, index: number) => (
                  <motion.p
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    key={ingredient}
                    className="medium-18 py-1"
                  >
                    {ingredient}
                  </motion.p>
                ))}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </ul>
  );
};

export default AccordionTemplate;
