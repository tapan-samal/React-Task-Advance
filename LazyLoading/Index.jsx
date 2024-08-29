import React, { Suspense } from "react";

const LazyLoading = React.lazy(() => import("./ChildComponent"));

const Index = () => {
  return (
    <>
      <h2>Display Paragraph: </h2>
      <Suspense fallback="Data Loading...">
        <LazyLoading />
      </Suspense>
    </>
  );
};

export default Index;
