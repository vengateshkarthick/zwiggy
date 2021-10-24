import * as React from 'react';

const Itemgrid = () => {
    const getRatings = (i: number) => <span dangerouslySetInnerHTML={{ __html: new Array<String>(5).fill(String.fromCharCode(9734), 0, i).join(" ") }}></span>
    const layout = () => {
        return (
            <div className="col col-6 col-md-4 fs-6" style={{ fontFamily: "Poppins" }}>
                <div className="card p-1" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <div className="card-title">
                            Dosa
                    </div>

                        <div className="card-text">
                            <div className="d-flex flex-column ">
                                <div className="row row-cols-12 justify-content-between align-items-center">
                                    <div className="col col-auto">Ratings</div>
                                    <div className="col col-auto"> {getRatings(5)}
                                    </div>
                                </div>
                                <div className="row row-cols-12 justify-content-between align-items-center">
                                    <div className="col col-auto">Quantity</div>
                                    <div className="col col-auto">{"2"}</div>
                                </div>
                                <div className="row row-cols-12 justify-content-between align-items-center">
                                    <div className="col col-auto">Rate</div>
                                    <div className="col col-auto">{"Rs. 200 "}</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
    return (
        <div className="row row-cols-12 m-auto">
            {layout()}
        </div>
    )
}
export default Itemgrid;