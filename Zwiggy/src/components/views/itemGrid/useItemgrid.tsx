import {useEffect, useState,createContext} from 'react'
import { hotel_api } from '../../../api/Items'


export const useItemgrid = () => {
    const [filter, setFilter] = useState<string | undefined>('All')
    const [hotelList , setHotelList] = useState<Array<any>>()
    useEffect(
        () => {
            if(filter === 'relevance'){
                setHotelList(hotel_api)
            }else {
                if (filter === 'takeaway') {
                    let list = hotel_api?.filter(item => item?.take_away === true)
                    setHotelList(list)
                }
            }
                
            
        },[filter])
    return {
        hotelList,
        filter,
        setFilter,
    }
}


export type ItemGridContextType = ReturnType <typeof useItemgrid>
export const ItemgridContext = createContext({} as ItemGridContextType) 
