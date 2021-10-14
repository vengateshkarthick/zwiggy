import React from 'react'

const Navbar = () => {
  return (
    <div className="row row-cols-12 justify-content-between  p-3 align-items-center navbar">
      <span className="col col-6 col-lg-3">
        <h4 className="ms-1">Zwiggy</h4>
      </span>
      <span className="col col-3 col-lg-3 ">
        <h4>Logo</h4>
      </span>
    </div>
  )
}
export default Navbar
