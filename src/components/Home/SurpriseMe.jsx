import { useEffect, useState } from "react";
import Loader from "../../utils/Loader";
import Modal from "../../utils/Modal";
import { useLazyGetRandomMealQuery } from "../../features/mealApi";
import { Link } from "react-router-dom";
const SurpriseMe = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [randomMeal, setRandomMeal] = useState(null);
  const [trigger, { data, isLoading, isError }] = useLazyGetRandomMealQuery();
  //setting the random meal value
  useEffect(() => {
    if (data?.meals?.[0]) setRandomMeal(data.meals[0]);
  }, [data]);
  //handle click
  const handleClick = () => {
    setRandomMeal(null);
    setIsOpen(true);
    trigger();
  };
  return (
    <section
      className="relative min-h-[30vh] flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://www.shutterstock.com/image-photo/background-food-dishes-european-cuisine-260nw-2490284951.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      {/* surprise button */}

      <div className="flex flex-col items-center">
        <button
          onClick={handleClick}
          className="z-30 px-6 py-3 bg-orange-500 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          Surprise Me
        </button>

        <p className="z-30 mt-4 text-lg italic text-orange-100">
          Discover a dish you never knew you craved.
        </p>
      </div>
      {/* surprice meal modal */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {isLoading && (
          <p className="text-gray-900 text-center text-2xl">Loading...</p>
        )}
        {isError && (
          <p className="text-red-500 text-center">
            Oops! Failed to fetch a surprise meal.
          </p>
        )}

        {randomMeal && (
          <Link to={`/description/${randomMeal.idMeal}`}>
            <div className="p-5 relative bg-white rounded-lg shadow">
              <img
                src={randomMeal.strMealThumb}
                alt={randomMeal.strMeal}
                className="w-full rounded mb-4"
              />
              <h2 className="text-2xl text-gray-900 truncate font-bold mt-2 hover:text-orange-500 transition duration-300">
                {randomMeal.strMeal}
              </h2>

              <span className="bg-orange-600 text-white py-1 px-3 text-sm rounded-xl absolute top-8 right-8">
                {randomMeal.strCategory}
              </span>

              <p className="mt-2 text-sm text-gray-700">
                <strong>Area:</strong> {randomMeal.strArea}
              </p>

              {randomMeal.strTags && (
                <p className="mt-1 text-sm text-gray-600 italic">
                  <strong>Tags:</strong>{" "}
                  {randomMeal.strTags.split(",").join(", ")}
                </p>
              )}
            </div>
          </Link>
        )}
      </Modal>
    </section>
  );
};

export default SurpriseMe;
