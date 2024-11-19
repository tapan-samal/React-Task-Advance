import React, { Suspense } from "react";

const LazyLoadingComponent = React.lazy(() => import("./ChildComponent"));

const LazyLoading = () => {
  return (
    <>
      <h2>Display Paragraph: </h2>
      <Suspense fallback="Data Loading...">
        <LazyLoadingComponent />
      </Suspense>
    </>
  );
};

export default LazyLoading;
