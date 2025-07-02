import SurpriseMe from "../../components/Home/SurpriseMe";
import Hero from "../../components/Home/Hero";
import FeaturedMeals from "../../components/Home/FeaturedMeals";
import CategoriesList from "../../components/Home/CategoryLists";
import FavouriteSection from "../../components/Home/FavouriteSection";
const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedMeals />
      <SurpriseMe />
      <CategoriesList />
      <FavouriteSection />
    </>
  );
};

export default Home;
