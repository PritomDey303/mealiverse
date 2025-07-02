import { useParams } from "react-router-dom";
import { useGetMealByIdQuery } from "../../features/mealApi";
import Loader from "../../utils/Loader";

const MealDescription = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetMealByIdQuery(id);
  const meal = data?.meals?.[0];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-40 my-10">
        <Loader />
      </div>
    );
  }

  if (isError || !meal) {
    return (
      <div className="p-6 text-center text-red-500">
        Error: {error?.data?.message || "Meal not found."}
      </div>
    );
  }

  // Extracting ingredients
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <section className="bg-gray-100 min-h-screen py-10 px-5 md:px-20">
      <h1 className="text-4xl font-bold py-2">Meal Details</h1>
      <div className="w-30 h-1 bg-orange-500"></div>
      <div className="py-6 md:max-w-90% mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mt-5  1 mb-4 text-center">
          {meal.strMeal}
        </h1>

        <div className="flex flex-col md:flex-row gap-10 mb-12">
          <div className="w-full md:max-w-md md:w-1/2">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2">
            {/* Category */}
            {meal.strCategory && (
              <p className="text-lg font-semibold text-gray-800 mb-4">
                Category:{" "}
                <span className="font-normal">{meal.strCategory}</span>
              </p>
            )}

            {/* Ingredients */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Ingredients
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-gray-700">
              {ingredients.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cooking Instructions */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Cooking Instructions
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {meal.strInstructions}
          </p>
        </div>

        {/* Tags  */}
        {meal.strTags && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-3">
              {meal.strTags.split(",").map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-orange-200 text-orange-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* YouTube Video */}
        {meal.strYoutube && (
          <div className="mt-16 max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Watch How to Make
            </h2>
            <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={`https://www.youtube.com/embed/${
                  meal.strYoutube.split("v=")[1]
                }`}
                title="YouTube Video"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MealDescription;
