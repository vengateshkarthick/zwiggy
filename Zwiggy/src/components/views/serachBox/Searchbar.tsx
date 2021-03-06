import { url } from "inspector";
import React, { useState } from "react";
interface searchBarprops {
  searchapi?: (search: string) => any;
}
const Searchbar = (props: searchBarprops) => {
  const [searchText, setSearchtext] = useState<string | undefined>("");
  return (
    <div 
      className="card border-0">
      <div className="card-body m-2">
      
        <form 
            style={{ 
              fontFamily: "Poppins" 
            }}
        >
          <div className="row row-cols-12 justify-content-center align-items-center">
           
            <div className="col col-auto">
              <label className="form-label fs-4" htmlFor="srchInp">
                Search delicious dishes!
              </label>
            </div>
          </div>
          <div className="row row-cols-12  justify-content-center align-items-center">
            <div className="col col-auto">
              <input
                type="text"
                name="searchText"
                placeholder="We delight to serve you"
                id="srchInp"
                className="form-control p-2 fs-5 fw-normal rounded-3"
                value={searchText}
                onChange={(e) => setSearchtext(e.target.value)}
                style={{ color: "" }}
              />
            </div>
            <div className="col col-auto mt-1">
              <button
                type="button"
                className="btn fw-normal fs-5 btn-outline-success rounded-4"
              >
                {"Search "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Searchbar;
