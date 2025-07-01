import React, { forwardRef } from "react";
import { useSearchMealsQuery } from "../features/mealApi";
import MealCard from "./MealCard";
import Loader from "../utils/Loader";

const Meals = forwardRef(({ query }, ref) => {
  const { data, isError, error, isLoading } = useSearchMealsQuery(query, {
    skip: !query?.length,
  });
  const meals = data?.meals;

  if (isLoading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-red-500">
        <p>Error: {error?.data?.message || "Failed to fetch meals."}</p>
      </div>
    );
  }

  return (
    <div ref={ref}>
      {meals ? (
        <section className="min-h-[50vh] px-5 md:px-30 py-15">
          <h1 className="text-3xl font-bold uppercase">Meals</h1>
          <div className="w-25 h-1 mt-1 bg-orange-500"></div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-10 px-5 sm:px-0">
            {meals.map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} />
            ))}
          </div>
        </section>
      ) : (
        <div className="min-h-[40vh] flex items-center justify-center text-gray-500">
          No meals found.
        </div>
      )}
    </div>
  );
});

export default Meals;
