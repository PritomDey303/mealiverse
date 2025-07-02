import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../../features/mealApi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const { data } = useGetCategoriesQuery();
  const categories = data?.categories?.slice(0, 8) || [];

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => {
    setIsOpen(false);
    setShowCategories(false);
  };

  return (
    <>
      <header className="bg-orange-400 text-black shadow-lg sticky top-0 z-50 border-b border-orange-800">
        <div className="container mx-auto px-4 py-8 flex justify-between items-center">
          <Link to="/">
            <h1 className="text-3xl font-bold cursor-pointer">🍽️ Mealiverse</h1>
          </Link>
          <button
            onClick={toggleSidebar}
            className="text-black hover:bg-orange-450 p-2 rounded-md transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={35} />}
          </button>
        </div>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-40"
          onClick={closeSidebar}
        ></div>
      )}

      <aside
        className={`fixed top-0 right-0 w-64 h-full bg-yellow-100 text-black z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-yellow-300">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={toggleSidebar} className="text-black">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col gap-2 p-4 text-lg">
          <Link
            to="/"
            onClick={closeSidebar}
            className="px-4 py-2 rounded-md hover:bg-yellow-200"
          >
            Home
          </Link>
          <Link
            to="/favourites"
            onClick={closeSidebar}
            className="px-4 py-2 rounded-md hover:bg-yellow-200"
          >
            Favourites
          </Link>
          <Link
            to="/filtered-meals"
            onClick={closeSidebar}
            className="px-4 py-2 rounded-md hover:bg-yellow-200"
          >
            Filter Meals
          </Link>
          <div className="relative">
            <button
              onClick={() => setShowCategories((prev) => !prev)}
              className="w-full px-4 py-2 flex justify-between items-center rounded-md hover:bg-yellow-200"
            >
              Categories
              <ChevronDown
                className={`ml-2 transition-transform ${
                  showCategories ? "rotate-180" : ""
                }`}
                size={18}
              />
            </button>
            {showCategories && (
              <div className="ml-4 mt-2 flex flex-col gap-1 text-base max-h-64 overflow-y-auto">
                {categories.map((cat) => (
                  <Link
                    key={cat.idCategory}
                    to={`/category/${cat.strCategory}`}
                    onClick={closeSidebar}
                    className="px-3 py-1 rounded hover:bg-yellow-200"
                  >
                    {cat.strCategory}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
