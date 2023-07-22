import React, { useEffect, useState } from "react";
import SingleData from "../Singledata/SingleData";
import Button from "../Button/button";

const Card = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
      .then((res) => res.json())
      .then((data) => setData(data.data.tools));
  }, []);
  const handleShowAll = () => {
    setShowAll(true);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {data.slice(0, showAll ? 12 : 6).map((singleData) => (
          <SingleData key={singleData.id} singleData={singleData}></SingleData>
        ))}
      </div>
      {!showAll && (
        <span onClick={handleShowAll}>
          <Button>See More</Button>
        </span>
      )}
    </>
  );
};

export default Card;
