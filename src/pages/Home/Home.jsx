import SurpriseMe from "../../components/Home/SurpriseMe";
import Hero from "../../components/Home/Hero";
import FeaturedMeals from "../../components/Home/FeaturedMeals";
import CategoriesList from "../../components/Home/CategoryLists";
const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedMeals />
      <SurpriseMe />
      <CategoriesList />
    </>
  );
};

export default Home;
