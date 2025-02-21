import React from "react";

const PageNumber = ({currentPage, setCurrentPage, noOfPages}) => {

    const handlePageChange = (n) => {
        setCurrentPage((prevState) => (prevState = n));
      };
    
      const goToPrevPage = () => {
        setCurrentPage((prevState) => prevState - 1);
      };
      const goToNextPage = () => {
        setCurrentPage((prevState) => prevState + 1);
      };
  return (
    <>
      <div>
        <button onClick={goToPrevPage} disabled={currentPage === 0}>
          ◀
        </button>
        {[...Array(noOfPages).keys()].map((n) => (
          <button
            className={
              "page-number " + (n === currentPage ? "active-page" : "")
            }
            key={n}
            onClick={() => handlePageChange(n)}
          >
            {n + 1}
          </button>
        ))}
        <button onClick={goToNextPage} disabled={currentPage === noOfPages - 1}>
          ▶
        </button>
      </div>
    </>
  );
};

export default PageNumber;
