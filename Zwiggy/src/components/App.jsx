import React from 'react'
import Footer from './Footer'
import Maincontent from './main-content/Maincontent'
import Navbar from './Navbar'
const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div
        className="d-flex justify-content-center align-items-center m-1"
        style={{
          height: 'calc(100% - 150px)',
          position: 'absolute',
          overflow: 'auto',
          width: 'calc(100% - 1%)',
        }}
      >
        <Maincontent />
      </div>
      <Footer />
    </React.Fragment>
  )
}
export default App