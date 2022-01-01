import * as React from 'react';
import { NavLink } from 'react-router-dom';
import header from '../../../images/restaurant.png'
import Filter from '../Filter/filter'
const Itemgrid = () => {
    const getRatings = (i: number) => <span dangerouslySetInnerHTML={{ __html: `${String.fromCharCode(9733)} ${i}`}}></span>
    const hotelList: Array<{
        hotel_name: string,
        ratings: number,
        average_oreder_completed : number,
        hotel_id: string,
        can_take_order: boolean,
        take_away: boolean
    }> = [
          {
            hotel_name: 'Mad&Cheese',
            ratings: 4,
            average_oreder_completed: 100,
            hotel_id: '89800',
            can_take_order: true,
            take_away: true
            
         }
    ]
    const layout = () => hotelList?.map(item => (
        <div className="col col-6 col-md-4 fs-6" style={{ fontFamily: "Poppins" }}>
            <div className="card p-1" style={{ width: "18rem" }}>

                <img src={header} className="card-img-top" alt='Restaurant' />
                <div
                    className="card-title"
                    style={{
                        fontWeight: 'bold'
                    }}
                >
                    {item.hotel_name}
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <div className="d-flex flex-column ">
                            <div 
                               className="row row-cols-12 justify-content-between align-items-center"
                            >
                                <div className="col col-auto p-1">
                                    Ratings
                                </div>
                                <div className="col col-auto ratings rounded fw-bold"> 
                                {getRatings(item.ratings)}
                                </div>
                            </div>
                            <div 
                               className="row row-cols-12 justify-content-between align-items-center"
                            >
                                <div className="col col-auto p-1">
                                    Order completed
                                </div>
                                <div className="col col-auto p-1">
                                    {item.average_oreder_completed}
                                </div>
                            </div>
                            <div 
                               className="row row-cols-12 justify-content-between align-items-center"
                            >
                                <div className="col col-auto p-1">
                                    Take and away
                                </div>
                                <div className="col col-auto p-1">
                                    {item.take_away ? "Available" : "Not Available" }
                                </div>
                            </div>
                            <div className="row row-cols-12 justify-content-between align-items-center">
                                <div className="col col-auto p-1">
                                    More
                                </div>
                                <div className="col col-auto btn btn-light">
                                    {
                                        <NavLink
                                            to= '/res_details'
                                            state={{
                                                id: item.hotel_id 
                                            }}
                                        >
                                            <i className='fa fa-arrow-right'/>
                                        </NavLink>
                                        
                                    }
                                 
                                  
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    ))
    return (
        <div className="d-flex flex-column">
            <div className = 'border border-bottom mb-1'>
                <Filter />
            </div>
            <div className="d-flex justify-content-center align-items-center">
                {layout()}
            </div>
        </div>
        
    )
}
export default Itemgrid;