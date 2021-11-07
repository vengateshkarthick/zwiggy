import React from "react";

const Filter = () => {
  return (
    <div className="row row-cols-12 fw-semi-bold fs-5  justify-content-between p-3 align-items-center filterbar">
      <div className="col col-3">{"200+ Restaurants"}</div>
      <div className="col-6 d-flex justify-content-center ">
        <div className="col col-auto m-auto link ">
                  <i className="fa fa-filter" aria-hidden="true"></i> Filter by
        </div>
        <div className="col col-auto m-auto link fw-bold btn btn-lg btn-success ">
          Relevance
        </div>
        <div className="col col-auto m-auto link fw-bold btn btn-lg btn-success">
          Delivery Time
        </div>
        <div className="col col-auto m-auto link fw-bold btn btn-lg btn-success">
          Ratings
        </div>
      </div>
    </div>
  );
};
export default Filter;
