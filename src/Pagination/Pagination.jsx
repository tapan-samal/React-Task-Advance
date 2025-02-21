import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import "./pagination.css";
import PageNumber from "./components/PageNumber";

//Constant
const PAGE_SIZE = 10;

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchApi = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data = await response.json();
      setProducts(data.products);
      // console.log(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const totalPoducts = products.length;
  const noOfPages = totalPoducts / PAGE_SIZE;
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  return (
    <div className="app">
      <h1>Pagination</h1>

      <div className="product-container">
        {!products.length ? (
          <h3>No Products found!</h3>
        ) : (
          <div className="products">
            {products.slice(start, end).map((product) => (
              <ProductCard
                key={product.id}
                image={product.thumbnail}
                title={product.title}
              />
            ))}
          </div>
        )}
      </div>
      <PageNumber
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        noOfPages={noOfPages}
      />
    </div>
  );
};

export default Pagination;
