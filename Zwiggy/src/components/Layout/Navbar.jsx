import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const getLink = () => (
                  <NavLink 
                     to='/signin'
                     style={{
                          color: 'black',
                          textDecoration: 'none'
                        }}
                  >
                      <i 
                        
                        className="fa fa-user-circle m-1" 
                        aria-hidden="true">
                      </i>
                      Account
                 </NavLink>
                )
  return (
    <div className="row row-cols-12 fw-semi-bold fs-5 justify-content-between border border-bottom p-3 align-items-center navbar">
      <div className="col col-3">Zwiggy</div>
      <div className="col-6 d-flex justify-content-center align-items-center">
        <div className="col col-3 col-lg-3 link">
          <i className="fa fa-gift m-1" aria-hidden="true"></i>Offers
        </div>
        <div className="col col-3 col-lg-3 link">
         {getLink()}
              
        </div>
        <div className="col col-3 col-lg-3 link">
          <i className="fa fa-shopping-cart  m-1" aria-hidden="true"></i>Cart
        </div>
      </div>
    </div>
  )
}
export default Navbar
