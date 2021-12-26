import {BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react'
import Maincontent from "./components/views/Maincontent";
import RestaurantDetails from "./components/views/restaurant";
const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
            
                <Route path={'/home' || '/'} element={<Maincontent/>}/>
                <Route path='/res_details' element={<RestaurantDetails/>}/>
        
            </Routes>
        </BrowserRouter>
       
    )
}

export default Routers