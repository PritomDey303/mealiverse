import React, { forwardRef } from "react";
import { useSearchMealsQuery } from "../../features/mealApi";
import MealCard from "./MealCard";
import Loader from "../../utils/Loader";
import { Link } from "react-router-dom";

const Meals = forwardRef(({ query = "" }, ref) => {
  const trimmed = query.trim();

  // skip fetching if query is empty
  const { data, isLoading, isError, error } = useSearchMealsQuery(trimmed, {
    skip: trimmed.length === 0,
  });

  const meals = data?.meals;

  // ✅ Conditionally hide the entire section when:
  // query is empty AND not loading AND not error
  const shouldHideSection = trimmed.length === 0 && !isLoading && !isError;

  if (shouldHideSection) return null;

  return (
    <section
      ref={ref}
      className="min-h-[50vh] px-5 md:px-20 py-10 bg-white transition-all duration-300"
    >
      <h1 className="text-3xl font-bold uppercase text-gray-800">Meals</h1>
      <div className="w-24 h-1 mt-1 mb-6 bg-orange-500"></div>

      {/* Loading */}
      {isLoading ? (
        <div className="min-h-[30vh] flex items-center justify-center">
          <Loader />
        </div>
      ) : isError ? (
        <div className="min-h-[30vh] flex items-center justify-center text-red-500 text-center px-4">
          <p>
            Error:{" "}
            {error?.data?.message ||
              "Something went wrong while fetching meals."}
          </p>
        </div>
      ) : meals?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {meals.map((meal) => (
            <Link to={`/description/${meal?.idMeal}`}>
              {" "}
              <MealCard key={meal.idMeal} meal={meal} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="min-h-[30vh] flex items-center justify-center text-red-500 text-lg">
          No meal found!
        </div>
      )}
    </section>
  );
});

export default Meals;
