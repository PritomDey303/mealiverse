import { useGetMealByIdQuery } from "../../features/mealApi";
import Loader from "../../utils/Loader";
import MealCard from "../common/MealCard";

const FavouriteMeal = ({ id }) => {
  const { data, isLoading, isError } = useGetMealByIdQuery(id);
  console.log(data);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-48">
        <Loader />
      </div>
    );
  }

  if (isError || !data?.meals?.[0]) {
    return <p className="text-center text-red-400">Failed to load meal.</p>;
  }

  return <MealCard meal={data.meals[0]} />;
};

export default FavouriteMeal;
