import React from "react";

const PageNumber = ({ currentPage, setCurrentPage, noOfPages }) => {
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const goToPrevPage = () => {
    setCurrentPage((prevState) => prevState - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  return (
    <>
      <button onClick={goToPrevPage} disabled={currentPage === 0}>
        ◀
      </button>
      {[...Array(noOfPages).keys()].map((page) => (
        <button
          className={`page-number ${page === currentPage ? "active-page" : ""}`}
          key={page}
          onClick={() => handlePageChange(page)}
        >
          {page + 1}
        </button>
      ))}
      <button onClick={goToNextPage} disabled={currentPage === noOfPages - 1}>
        ▶
      </button>
    </>
  );
};

export default PageNumber;
