import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Routers from '../../routes'
import { BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
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
          {Routers && <Routers />}
        </div>
        <Footer />
      </BrowserRouter>
     
    </React.Fragment>
  )
}
export default App
