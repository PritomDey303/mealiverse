import { Link } from "react-router-dom";

const FavouriteSection = () => {
  return (
    <section className="bg-gray-200 px-5 md:px-20 py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Your Favourite Meals
      </h2>
      <p className="text-gray-600 mb-8">
        Revisit the meals you’ve bookmarked and enjoy them again anytime.
      </p>
      <Link
        to="/favourites"
        className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
      >
        View Favourites
      </Link>
    </section>
  );
};

export default FavouriteSection;
