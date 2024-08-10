"use client";

import { motion } from "framer-motion";

import { FullDrinkData } from "@/types/drinks.index";
import Tag from "../Tag";

const DrinkInfo = ({ data }: { data: FullDrinkData }) => {
  const { name, glassType, category } = data;
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="hidden xl:flex xl:flex-col"
    >
      {glassType && category && (
        <div className="flex gap-4">
          {glassType && <Tag title={glassType} />}
          {category && <Tag title={category} />}
        </div>
      )}
      <h3 className="semibold-40 mt-5 ">{name}</h3>
    </motion.div>
  );
};

export default DrinkInfo;
