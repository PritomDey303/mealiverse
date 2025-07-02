import { Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFavourite, removeFavourite } from "../../features/favouriteSlice";

const MealCard = ({ meal }) => {
  const dispatch = useDispatch();
  const favouriteIds = useSelector((state) => state.favourites.ids);
  const isFavourited = favouriteIds.includes(meal.idMeal);

  const toggleFavourite = (e) => {
    e.stopPropagation();
    e.preventDefault();
    isFavourited
      ? dispatch(removeFavourite(meal.idMeal))
      : dispatch(addFavourite(meal.idMeal));
  };

  return (
    <Link
      to={`/description/${meal.idMeal}`}
      className="relative block w-auto md:w-50 rounded-2xl overflow-hidden shadow-xl transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-105"
    >
      <img
        className="w-full h-48 object-cover"
        src={meal?.strMealThumb}
        alt={meal?.strMeal || "Meal Image"}
      />

      <button
        onClick={toggleFavourite}
        className="absolute top-3 right-3 bg-white/80 p-2 rounded-full z-10 hover:bg-white"
        aria-label="Bookmark meal"
      >
        <Heart
          className={`w-5 h-5 transition duration-300 ${
            isFavourited
              ? "text-red-500 fill-red-500"
              : "text-gray-400 hover:text-red-500 hover:fill-red-500"
          }`}
        />
      </button>

      <div className="px-4 py-3 bg-white">
        <div className="text-lg font-semibold text-gray-800 truncate hover:text-orange-500">
          {meal?.strMeal}
        </div>
      </div>
    </Link>
  );
};

export default MealCard;
