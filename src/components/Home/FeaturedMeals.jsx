import Slider from "react-slick";
import { useGetFeaturedMealsQuery } from "../../features/mealApi";
import MealCard from "../common/MealCard";
import Loader from "../../utils/Loader";
import { Link } from "react-router-dom";

const FeaturedMeals = () => {
  const { data, isLoading, isError } = useGetFeaturedMealsQuery();

  const meals = data?.meals?.slice(0, 10) || [];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="min-h-[50vh] px-10 md:px-20 py-20 bg-gray-200 transition-all duration-300">
      <h1 className="text-2xl sm:text-3xl font-bold uppercase text-gray-800">
        Featured Meals
      </h1>
      <div className="w-35 sm:w-45 h-1 mt-1 mb-10 bg-orange-500"></div>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader />
        </div>
      ) : isError ? (
        <p className="text-red-500 text-center">
          Failed to load featured meals.
        </p>
      ) : (
        <Slider {...settings} className="px-2">
          {meals.map((meal) => (
            <Link
              to={`/description/${meal.idMeal}`}
              key={meal.idMeal}
              className="px-2"
            >
              <MealCard meal={meal} />
            </Link>
          ))}
        </Slider>
      )}
    </section>
  );
};

export default FeaturedMeals;
