import * as React from 'react';
import header from '../../../images/restaurant.png'
import Filter from '../Filter/filter';

const Itemgrid = () => {
    const getRatings = (i: number) => <span dangerouslySetInnerHTML={{ __html: `${String.fromCharCode(9733)} ${i}`}}></span>
    const layout = () => {
        return (
            <div className="col col-6 col-md-4 fs-6" style={{ fontFamily: "Poppins" }}>
                <div className="card p-1" style={{ width: "18rem" }}>
                   
                    <img src={header} className="card-img-top" alt='Restaurant' />
                    <div className="card-title">
                        Dosa
                    </div>
                    <div className="card-body">
                        <div className="card-text">
                            <div className="d-flex flex-column ">
                                <div className="row row-cols-12 justify-content-between align-items-center">
                                    <div className="col col-auto p-1">Ratings</div>
                                    <div className="col col-auto ratings rounded fw-bold"> {getRatings(5)}
                                    </div>
                                </div>
                                <div className="row row-cols-12 justify-content-between align-items-center">
                                    <div className="col col-auto p-1">Quantity</div>
                                    <div className="col col-auto p-1">{"2"}</div>
                                </div>
                                <div className="row row-cols-12 justify-content-between align-items-center">
                                    <div className="col col-auto p-1">Rate</div>
                                    <div className="col col-auto p-1">{"Rs. 200 "}</div>
                                </div>
                                <div className="row row-cols-12 justify-content-between align-items-center">
                                    <div className="col col-auto p-1">More</div>
                                    <div className="col col-auto btn btn-light"><i className = 'fa fa-arrow-right' ></i></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
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