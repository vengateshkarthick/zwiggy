import React from 'react'
import App from './components/Layout/App'
import reactdom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './components/style.css'
import { BrowserRouter as Router} from 'react-router-dom'
import Routers from './routes'
reactdom.render(
   <>
   <App/>
   </>, document.getElementById('root'))
