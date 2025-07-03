import { useState, useEffect } from "react";
import {
  useGetIngredientsListQuery,
  useLazyGetFilteredMealsQuery,
} from "../../features/mealApi";
import Loader from "../../utils/Loader";
import MealCard from "../../components/common/MealCard";

const FilteredMeals = () => {
  const {
    data: ingredientsData,
    isLoading: ingLoading,
    isError: ingError,
  } = useGetIngredientsListQuery();

  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [trigger, { data, isLoading, isError }] =
    useLazyGetFilteredMealsQuery();
  const [filteredMeals, setFilteredMeals] = useState([]);

  useEffect(() => {
    if (selectedIngredient) {
      trigger(selectedIngredient);
    } else {
      setFilteredMeals([]);
    }
  }, [selectedIngredient, trigger]);

  useEffect(() => {
    if (data?.meals) {
      setFilteredMeals(data.meals);
    } else {
      setFilteredMeals([]);
    }
  }, [data]);

  if (ingLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader />
      </div>
    );
  }

  if (ingError) {
    return (
      <p className="text-center text-red-500">Failed to load ingredients.</p>
    );
  }

  return (
    <section className="px-5 md:px-20 py-16 bg-gray-50 min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 uppercase mb-2">
        Filter Meals
      </h2>
      <div class="w-28 sm:w-35 h-1 bg-orange-500 mb-10"></div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4 bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
          <div className="flex flex-col gap-2 max-h-60 overflow-y-auto">
            {ingredientsData?.meals?.map(({ strIngredient }) => (
              <label
                key={strIngredient}
                className="inline-flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="ingredient"
                  value={strIngredient}
                  checked={selectedIngredient === strIngredient}
                  onChange={() => setSelectedIngredient(strIngredient)}
                  className="accent-orange-500"
                />
                <span>{strIngredient}</span>
              </label>
            ))}
          </div>
        </div>

        {/* displaying filtered meals based on selected ingredient */}

        <div className="md:flex-1">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <Loader />
            </div>
          ) : isError ? (
            <p className="text-center text-red-500">
              Failed to load meals. Please try again.
            </p>
          ) : filteredMeals.length === 0 ? (
            <p className="text-center text-gray-600">
              No meals found for selected ingredient.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredMeals.map((meal) => (
                <MealCard key={meal.idMeal} meal={meal} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FilteredMeals;
