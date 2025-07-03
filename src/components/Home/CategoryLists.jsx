import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../../features/mealApi";
import Loader from "../../utils/Loader";

const CategoriesList = () => {
  const { data, isLoading, isError } = useGetCategoriesQuery();
  const categories = data?.categories || [];

  return (
    <section className="px-5 md:px-20 py-16 bg-white min-h-[60vh]">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 uppercase mb-2">
        Meal Categories
      </h2>
      <div className="w-35 sm:w-52 h-1 bg-orange-500 mb-8"></div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader />
        </div>
      ) : isError ? (
        <p className="text-center text-red-500">
          Failed to load categories. Please try again.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              to={`/category/${category.strCategory}`}
              key={category.idCategory}
              className="group relative bg-gray-100 hover:bg-orange-100 rounded-xl p-4 shadow transition"
            >
              <img
                src={category.strCategoryThumb}
                alt={category.strCategory}
                className="rounded-lg w-full object-cover h-40 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700 group-hover:text-orange-600 transition">
                {category.strCategory}
              </h3>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default CategoriesList;
