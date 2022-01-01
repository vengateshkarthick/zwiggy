import React from 'react'
import Searchbar from './serachBox/Searchbar'
import Itemgrid from './itemGrid/index'
import header from '../../images/header.png'
const Maincontent = () => {
  return (
    <>
      <div className="container-fluid d-flex flex-column">
        <div className='d-flex flex-wrap justify-content-center align-items-center'>
            <div className="col col-6 col-sm-6 col-md-4">
              <img 
                 src={header} 
                 alt='hdr_search' 
                 style={{
                   height: '300px'
                 }}
              />
            </div>
            <Searchbar />
         </div>
        <Itemgrid />
      </div>
    </>
  )
}
export default Maincontent
