import React from 'react'
import Searchbar from './serachBox/Searchbar'
import Itemgrid from './itemGrid/index'
const Maincontent = () => {
  return (
    <>
      <div className="container-fluid d-flex flex-column">
        <Searchbar />

        <Itemgrid />
      </div>
    </>
  )
}
export default Maincontent
