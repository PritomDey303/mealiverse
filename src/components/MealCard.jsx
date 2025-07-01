import { Heart } from "lucide-react";

const MealCard = ({ meal, onNameClick }) => {
  return (
    <div className="relative w-auto sm:w-50 rounded-2xl overflow-hidden shadow-xl transition duration-300 cursor-pointer  ease-in-out hover:-translate-y-2 hover:scale-105">
      <img
        className="w-full h-48 object-cover"
        src={meal?.strMealThumb}
        alt={meal?.strMeal || "Meal Image"}
      />

      <button
        className="absolute top-3 right-3 bg-white/80 p-2 rounded-full z-10 hover:bg-white cursor-pointer"
        onClick={(e) => e.stopPropagation()}
        aria-label="Bookmark meal"
      >
        <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 hover:fill-red-500 transition duration-300" />
      </button>

      <div className="px-4 py-3 bg-white">
        <div
          onClick={(e) => {
            e.stopPropagation();
            if (onNameClick) onNameClick(meal);
          }}
          className="text-lg font-semibold text-gray-800 truncate hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 rounded"
        >
          {meal?.strMeal}
        </div>
      </div>
    </div>
  );
};

export default MealCard;
