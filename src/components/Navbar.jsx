import React, { useContext, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { searchContext } from '../store/SearchAllPlacesContextProvider';

const Navbar = () => {
    const navigate = useNavigate();
    const {placeid , title} = useParams();
    const {setKeyword ,rating , setRating} = useContext(searchContext);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary position-sticky top-0 z-2" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><b>TakeMeAway</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                            </li>
                            {
                                placeid && (<li className="nav-item">
                                                    <Link className="nav-link active" aria-current="page" onClick={() => {navigate(-1)}} >Listing</Link>
                                            </li>)
                            }
                            {title && <li className="nav-item dropdown-center">
                                <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    0-{rating}⭐
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li className='m-1' ><input onChange={(e) => setRating(Number(e.target.value))} value={rating} type="range" className="form-range custom-slider" min="0" max="5" step="1" id="customRange3" /></li>
                                    
                                </ul>
                            </li>}
                        </ul>
                        <span className='navbar-text'>
                        {
                                title && <div className="nav-item"> 
                                    <form className="d-flex" role="search">
                                                <input 
                                                    className="form-control me-2" 
                                                    type="search" 
                                                    placeholder="Search" 
                                                    aria-label="Search" 
                                                    onChange={(e) => setKeyword(e.target.value)}
                                                />
                                            </form> 
                                        </div>
                            }
                        </span>
                    </div>
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar 
