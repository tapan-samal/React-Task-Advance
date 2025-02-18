import React, { useEffect, useState } from "react";
import "./search-bar.css";

const SearchBar = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showData, setShowData] = useState(false);
  const [cache, setCache] = useState({});

  const fetchApi = async () => {
    // If input is empty, clear the recipes and exit early.
    if (!searchInput.trim()) {
      setRecipes([]);
      return;
    }

    if (cache[searchInput]) {
      // console.log("from Cache");
      setRecipes(cache[searchInput]);
      return;
    }

    try {
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${searchInput}`
      );
      const data = await response.json();
      const fetchedRecipes = data?.recipes || [];
      setRecipes(fetchedRecipes);
      // Update cache with the current search input.
      setCache((prevCache) => ({
        ...prevCache,
        [searchInput]: fetchedRecipes,
      }));
    } catch (error) {
      console.error("Error fetching recipes:", error.message);
    }
  };

  useEffect(() => {
    const timer = setTimeout(fetchApi, 400);
    return () => clearTimeout(timer);
  }, [searchInput]);

  return (
    <div className="searchbar-main">
      <h1>Auto Complete Search Bar</h1>
      <div>
        <input
          type="text"
          className={`search-input ${showData ? "focus" : ""}`}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onFocus={() => setShowData(true)}
          onBlur={() => setShowData(false)}
        />
      </div>
      {showData && recipes.length > 0 && (
        <div className="recipe-container">
          {recipes.map((item) => (
            <span
              key={item.id}
              className="recipe"
              onMouseDown={() => {
                setSearchInput(item.name);
                setShowData(false);
              }}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
