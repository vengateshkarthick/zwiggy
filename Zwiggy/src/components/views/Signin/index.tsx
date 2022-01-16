import React from 'react'
import logo from '../../../images/SigninLogo.png'
import '../../../components/style.css'
 export default function Signin() {
    return (
        <div className="container-fluid" id='signin'>
            <div className="card ">
                
                <div className='card-body d-flex  align-items-center w-100'>
                        <div 
                           style={{
                            width: 'auto',
                            flexBasis: '50%',
                            height: '70%'
                        }}>
                            <img 
                              src={logo} 
                              alt="Signin Logo" 
                              className='img' 
                              style={{
                                  width: '100%',
                                  height: '500px'

                              }}
                            />
                        </div>
                        <div
                         style={{
                            height: '70vh',
                            flexBasis: '50%',
                            //backgroundColor: '#3db34a',
                            //  color: 'white'
                         }}
                        > 
                            <span className='fw-normal'
                                style={{
                                    fontSize: '48px',
                                    bottom: '15px',
                                    margin: '5%'
                                }}
                            >
                                Sign in
                            </span>
                            <form className='form fs-4'
                                style={{
                                    marginTop: '5%'
                                }}
                            >
                                <div 
                                  className='row row-cols-12 p-1'
                                  style={{
                                        margin: '5%'
                                    }}
                                  >
                                    <div className="col col-auto">
                                        <label 
                                          htmlFor="username" 
                                          style={{
                                              fontSize: '1.25rem'
                                          }}
                                        />
                                            Enter your Mailid
                                            <input 
                                            type="text" 
                                            className='form-control p-2'
                                            style={{
                                                margin: '1%'
                                            }} 
                                            name="username" 
                                            id="username" />
                                    </div>
                                </div>
                                <div 
                                className='row row-cols-12 p-1'
                                style={{
                                    margin: '5%'
                                }}
                                >
                                    <div className="col col-auto">
                                        <label 
                                          className='mb-1' 
                                          htmlFor="password"
                                          style={{
                                                fontSize: '1.25rem'
                                            }}
                                          />
                                            Enter your password
                                            <input 
                                            type="password" 
                                            className='form-control p-2' 
                                                style={{
                                                    margin: '1%'
                                                }} 
                                            name="password" 
                                            id="password" />
                                        
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}