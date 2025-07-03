import { useSelector } from "react-redux";
import FavouriteMeal from "../../components/Favourites/FavouriteMeal";

const Favourites = () => {
  const favouriteIds = useSelector((state) => state.favourites.ids);

  return (
    <section className="px-5 md:px-20 py-16 bg-gray-50 min-h-[80vh]">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 uppercase mb-2">
        Favourite Meals
      </h2>
      <div className="w-35 h-1 bg-orange-500 mb-8"></div>

      {favouriteIds.length === 0 ? (
        <p className="text-center text-gray-600">
          You haven't favourited any meals yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {favouriteIds.map((id) => (
            <FavouriteMeal key={id} id={id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Favourites;
