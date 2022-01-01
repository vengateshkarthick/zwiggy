import React from 'react';

const Filter = () => {
  return (
    <div className='d-flex flex-warp fw-semi-bold fs-5 justify-content-evenly p-3 align-items-center filterbar'>
        <span className='fw-bold'>
         <i className="fa fa-filter"/> Filter with
        </span>
      
        <button
          className='link fw-bold btn btn-lg btn-success'
        >
          Relevance
        </button>
          <button
            className='link fw-bold btn btn-lg btn-success'
          >
            Take Away
          </button>
          <button
            className='link fw-bold btn btn-lg btn-success'
          >
            Ratings
          </button>
        </div>
       
        
  )
}
export default Filter;
