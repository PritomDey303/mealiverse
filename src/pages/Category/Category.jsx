import { Link, useParams } from "react-router-dom";
import Loader from "../../utils/Loader";
import MealCard from "../../components/common/MealCard";
import { useGetMealsByCategoryQuery } from "../../features/mealApi";

const Category = () => {
  const { name } = useParams();
  const { data, isLoading, isError } = useGetMealsByCategoryQuery(name);
  const meals = data?.meals || [];

  return (
    <section className="px-5 md:px-20 py-16 bg-gray-50 min-h-[60vh]">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 uppercase mb-2">
        Category:{name}
      </h2>
      <div className="w-28 sm:w-35 h-1 bg-orange-500 mb-8"></div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader />
        </div>
      ) : isError ? (
        <p className="text-center text-red-500">
          Failed to load meals. Please try again.
        </p>
      ) : meals.length === 0 ? (
        <p className="text-center text-gray-600">
          No meals found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {meals.map((meal) => (
            <Link to={`/description/${meal.idMeal}`}>
              <MealCard key={meal.idMeal} meal={meal} />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Category;
