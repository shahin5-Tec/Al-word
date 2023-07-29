import React from "react";

const Modal = (props) => {
  console.log(props.singleData);
  const { image_link, description, integrations, features } = props?.singleData;
  console.log(integrations);
  return (
    <div>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card card-side bg-base-100 ">
            <div className="card-body border-2 border-error mr-2">
              <h2 className="card-title">
                {description ? description : "not found"}
              </h2>

              <div className="flex justify-between">
                <div>
                  <h1 className="font-bold text-2xl">Features</h1>
                  {Object.values(features || {}).map((value) => (
                    <p>{value.feature_name}</p>
                  ))}
                </div>
                <div>
                  <h1 className="font-bold text-2xl">Integrations</h1>
                  {integrations &&
                    integrations.map((int) => <p>{int ? int : "not found"}</p>)}
                </div>
              </div>
            </div>
            <figure className="w-full ">
              <img
                className="w-full h-64"
                src={image_link ? image_link[0] : null}
                alt=""
              />
            </figure>
          </div>
          <div className="modal-action">
            <label className="cursor-pointer font-bold"  htmlFor="my_modal_6">Close</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
