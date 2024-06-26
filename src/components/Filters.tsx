import { useState } from "react";
import { SearchIcon } from "./icons";
// Import Types
import { HandleFilter } from "../types/filter.d.type";

const Filters = ({ handleFilter }: { handleFilter: HandleFilter }) => {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(!focus);
  };

  return (
    // Container
    <div className="w-full max-w-[768px]">
      {/* Margin */}
      <div className="mx-4 mt-6 mb-4 sm:mx-8">
        {/* Search Filter */}
        <div className="relative flex items-center justify-center px-2 py-2 rounded-full shadow-md bg-secondary">
          <input
            onChange={handleFilter}
            onFocus={handleFocus}
            onBlur={handleFocus}
            type="text"
            placeholder="Buscar por alias"
            className={`${
              focus ? "pl-4" : "pl-12"
            } transition-[padding] duration-300 relative placeholder:text-primary/60 outline-none text-primary w-full bg-secondary py-2 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50`}
          />
          <div className={` ${focus && "opacity-0"} absolute left-5 pointer-events-none transition-all duration-300`}>
            <SearchIcon className="w-5 h-5 fill-primary/60" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
