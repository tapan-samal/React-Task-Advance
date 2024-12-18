import React from "react";
import { useEffect, useState } from "react";

const GridListView = () => {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState("grid");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  const handleSelectChange = (e) => {
    fetch(`https://dummyjson.com/products?limit=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 my-3">
          <div className="pull-left">
            <select className="form-control" onChange={handleSelectChange}>
              <option>-- Pagination --</option>
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
          </div> <br />
          <div className="pull-right">
            <div className="btn-group">
              <button className="btn btn-info" onClick={() => setView("list")}>
                List View
              </button>
              <button className="btn btn-danger" onClick={() => setView("grid")}>
                Grid View
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="products" className="row view-group">
        {products.map((product, key) => {
          return (
            <div
              className={`item col-xs-4 col-lg-4 ${
                view === "list" ? "list-group-item" : "grid-group-item"
              }`}
            >
              <div className="thumbnail card">
                <div className="img-event">
                  <img
                    className="group list-group-image img-fluid img-size"
                    src={product.thumbnail}
                    alt=""
                  />
                </div>
                <div className="caption card-body">
                  <h4 className="group card-title inner list-group-item-heading">
                    {product.brand}
                  </h4>
                  <p className="group inner list-group-item-text">
                    {product.description}
                  </p>
                  <div className="row">
                    <div className="col-xs-12 col-md-6">
                      <p className="lead">Rs. {product.price}</p>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <a className="btn btn-success" href="#">
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GridListView;
