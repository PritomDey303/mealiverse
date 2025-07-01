import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Top Navbar */}
      <header className="bg-orange-400 text-black shadow-lg sticky top-0 z-50 border-b border-orange-800">
        <div className="container mx-auto px-4 py-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">🍽️ Mealiverse</h1>
          <button
            onClick={toggleSidebar}
            className="text-black hover:bg-orange-450 p-2 rounded-md transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={35} />}
          </button>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar*/}
      <aside
        className={`
          fixed top-0 right-0 w-64 h-full bg-yellow-100 text-black z-50 
          shadow-lg transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-between items-center p-4 border-b border-yellow-300">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={toggleSidebar} className="text-black">
            <X size={24} />
          </button>
        </div>
        <hr className="px-2" />
        <nav className="flex flex-col gap-2 p-4 text-lg">
          {["Home", "Categories", "Random Meal", "Favorites"].map((item) => (
            <button
              key={item}
              onClick={toggleSidebar}
              className="w-full text-left px-4 py-2 rounded-md hover:bg-yellow-200 transition"
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
