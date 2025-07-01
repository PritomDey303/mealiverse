import { Search } from "lucide-react";
import { useRef, useState } from "react";
import Meals from "./Meals";

const Hero = () => {
  const mealsResultRef = useRef(null);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchTerm(query.trim());
      mealsResultRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
          <form
            onSubmit={handleSubmit}
            className="w-9/10 sm:w-full bg-white rounded-full max-w-xl flex  overflow-hidden shadow-lg"
          >
            <input
              type="text"
              placeholder="Search for food..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-grow px-6 py-3 text-black rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-400 hover:bg-orange-500 px-6 py-3 font-semibold rounded-r-md transition"
            >
              <Search />
            </button>
          </form>
          <h1 className="text-xl md:text-5xl font-bold mt-10 drop-shadow-lg">
            What are your cravings today?
          </h1>
          <p className="text-lg md:text-xl mt-2">
            Discover new recipes and find your next favorite meal!
          </p>
        </div>
      </section>
      {/* Meals section */}
      <Meals ref={mealsResultRef} query={searchTerm} />
    </>
  );
};

export default Hero;
