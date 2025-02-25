import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import PageNumber from "./components/PageNumber";
import "./pagination.css";

//Constant
const PAGE_SIZE = 10;
const PRODUCTS_URL = "https://dummyjson.com/products?limit=100";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    try {
      const response = await fetch(PRODUCTS_URL);

      if (!response.ok) {
        throw new Error(`HTTP error ! Status: ${response.status}`);
      }

      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  return (
    <div className="app">
      <h1>Pagination</h1>
      {loading ? (
        <h3 className="loading">Products Loading...</h3>
      ) : (
        <div className="product-container">
          {!products.length ? (
            <h3 className="loading">No Products found!</h3>
          ) : (
            <>
              <div className="products">
                {products.slice(start, end).map((product) => (
                  <ProductCard
                    key={product.id}
                    image={product.thumbnail}
                    title={product.title}
                  />
                ))}
              </div>
              <div className="pg-component">
                {totalProducts > 0 && (
                  <PageNumber
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    noOfPages={noOfPages}
                  />
                )}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Pagination;
