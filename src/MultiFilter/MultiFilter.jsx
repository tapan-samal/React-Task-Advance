import React, { useState, useMemo } from "react";
import { items, categories } from "./items";
import "./styles.css";

const MultiFilter = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  const handleFilterBtnClick = (selectedCategory) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(selectedCategory)
        ? prevFilters.filter((category) => category !== selectedCategory)
        : [...prevFilters, selectedCategory]
    );
  };

  useMemo(() => {
    if (selectedFilters.length === 0) {
      setFilteredItems(items);
    } else {
      setFilteredItems(
        items.filter((item) => selectedFilters.includes(item.category))
      );
    }
  }, [selectedFilters]);

  return (
    <>
      <h1>Multi Filter</h1>
      <div className="btn-container">
        {categories.map((category) => (
          <button
            onClick={() => handleFilterBtnClick(category)}
            key={category}
            className={`button ${
              selectedFilters.includes(category) ? "active" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="items-container">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index} className="item">
              <h3>{item.name}</h3>
              <h4 className="category">{item.category}</h4>
            </div>
          ))
        ) : (
          <h3>No items match the selected filters!</h3>
        )}
      </div>
    </>
  );
};

export default MultiFilter;
