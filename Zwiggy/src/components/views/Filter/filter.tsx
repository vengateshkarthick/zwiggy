import React, { useContext } from 'react';
import { ItemgridContext } from '../itemGrid/useItemgrid';

const Filter = () => {
  const contextVal = useContext(ItemgridContext)
  const {
    setFilter
  } = contextVal
  return (
    <div className='d-flex flex-warp fw-semi-bold fs-5 justify-content-evenly p-3 align-items-center filterbar'>
        <span className='fw-bold'>
         <i className="fa fa-filter"/> Filter with
        </span>
      
        <button
          className='link fw-bold btn btn-lg btn-success'
          onClick={() => setFilter('relevance')}
        >
          Relevance
        </button>
          <button
            className='link fw-bold btn btn-lg btn-success'
             onClick={() => setFilter('takeaway')}
          >
            Take Away
          </button>
          <button
            className='link fw-bold btn btn-lg btn-success'
             onClick={() => setFilter('ratings')}
          >
            Ratings
          </button>
        </div>
       
        
  )
}
export default Filter;
