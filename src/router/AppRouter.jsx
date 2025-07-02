import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import MealDescription from "../pages/MealDescription/MealDescription";
import Category from "../pages/Category/Category";
import Favourites from "../pages/Favourites/Favourites";
import FilteredMeals from "../pages/FilteredMeals/FilteredMeals";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/description/:id" element={<MealDescription />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/filtered-meals" element={<FilteredMeals />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
