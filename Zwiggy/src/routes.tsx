import {BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react'
import Maincontent from "./components/views/Maincontent";
import RestaurantDetails from "./components/views/restaurant";
import Signin from "./components/views/Signin/index";
const Routers = () => {
    return (
        
            <Routes>
            
                <Route path={'/home' || ''} element={<Maincontent/>}/>
                <Route path='/res_details' element={<RestaurantDetails/>}/>
                <Route path='/signin' element={<Signin/>}/> 
            </Routes>
        
       
    )
}

export default Routers