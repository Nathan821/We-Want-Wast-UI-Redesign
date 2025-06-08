import React from "react";
import { motion } from "framer-motion";
import { Plus, Minus, CheckCircle2 } from "lucide-react";

{
  /* This is Image Objects used to Desplay on UI */
}
const skipImages = {
  4: "/assets/skip4.png",
  6: "/assets/skip6.png",
  8: "/assets/skip8.png",
  10: "/assets/skip10.png",
  12: "/assets/skip12.png",
  14: "/assets/skip14.png",
  16: "/assets/skip16.png",
  20: "/assets/skip20.png",
  40: "/assets/skip40.png",
};

const SkipCard = ({ skip, isSelected, onToggle }) => {
  const imageUrl = skipImages[skip.size] || "/assets/default.png";

  {
    /* This is Dive with Custom Animaion */
  }
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`relative rounded-3xl p-6 bg-white cursor-pointer transition-all duration-300 shadow-xl 
        ${
          isSelected
            ? "ring-4 ring-green-500 scale-[1.02] cursor-pointer"
            : "hover:ring-2 hover:ring-green-300 cursor-pointer"
        }`}
      onClick={() => onToggle(skip.id)}
    >
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-4 right-4 bg-green-600 p-1 rounded-full z-10 shadow-md"
        >
          <CheckCircle2 className="text-white w-6 h-6" />
        </motion.div>
      )}

      <motion.img
        src={imageUrl}
        alt={`${skip.size} Yard Skip`}
        className="mx-auto h-32 object-contain mb-4 drop-shadow-2xl"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300 }}
      />

      <div className="bg-gradient-to-r from-green-600 to-green-400 text-white rounded-xl p-4 flex justify-between items-center shadow-inner">
        <div>
          <h3 className="text-xl font-bold font-[Poppins]">
            {skip.size} Yard Skip
          </h3>
          <p className="text-sm opacity-90">{skip.hire_period_days}-day hire</p>
          <p className="text-lg font-semibold">£{skip.price_before_vat}</p>
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            onToggle(skip.id);
          }}
          className="bg-white text-green-600 p-2 rounded-full shadow-md cursor-pointer"
        >
          {isSelected ? <Minus /> : <Plus />}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SkipCard;
