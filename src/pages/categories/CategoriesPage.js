import React from "react";
import Preview from "../../components/categoryPreview/Preview";

const CategoriesPage = () => {
  return (
    <div>
      <h1>Categories</h1>
      <Preview key={1} category={"Bags"} />
      <Preview key={2} category={"Shoes"} />
      <Preview key={3} category={"Wears"} />
      <Preview key={4} category={"Accessories"} />
    </div>
  );
};

export default CategoriesPage;
