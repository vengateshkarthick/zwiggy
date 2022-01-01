import React from 'react'
import { useLocation } from 'react-router'
const RestaurantDetails = () => {
    const location = useLocation()
    const {id} :any = location.state 
    return (
        <div>
            {`Hi Page for a restaurant having id ${id}`}
        </div>
    )
}

export default RestaurantDetails