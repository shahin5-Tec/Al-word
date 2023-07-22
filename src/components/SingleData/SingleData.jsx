import React from "react";

const SingleData = (props) => {
  console.log(props.singleData);
  const { id, image, name, features, published_in } = props.singleData;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-2xl">
        <figure>
          <img className="w-full h-64 " src={image} alt="" />
        </figure>

        <div className="card-body">
          <h2 className="text-2xl font-bold">Features</h2>
          {features.map((feature,index) => (
            <p>
                 {index +1} .
                {feature}
               
            
            </p>
          ))}
         
         
        </div>
      </div>
    </div>
  );
};

export default SingleData;
