import React from 'react'
import Footer from './Footer'
import Maincontent from '../views/Maincontent'
import Navbar from './Navbar'
import Routers from '../../routes'
const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div
        className="d-flex m-2"
        style={{
          height: 'calc(100% - 150px)',
          position: 'absolute',
          overflow: 'auto',
          width: 'calc(100% - 1%)',
        }}
      >
       { Routers && <Routers/>}
      </div>
      <Footer />
    </React.Fragment>
  )
}
export default App
