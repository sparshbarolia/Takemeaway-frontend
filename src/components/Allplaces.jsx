import React, { useEffect, useState } from 'react'
import { Route, Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Notfound from './Notfound';
import LoadingSpinner from './LoadingSpinner';
import MapContainer from './MapContainer';

const Allplaces = () => {
   const [loading,setLoading] = useState(true);

   const BASE_URL = import.meta.env.VITE_BASE_URL;
   const {title , loc} = useParams(); 
   const [allPlacesArr , setallPlacesArr] = useState([]);
   useEffect(() => {
      axios.get(`${BASE_URL}/all-places/${title}/${loc}`)
      .then((output) => {
         setallPlacesArr(output?.data?.results)
         setLoading(false);
      })
   },[])

   // useEffect(() => {
   //    console.log(allPlacesArr);
   // },[allPlacesArr])


  return (
   <>
   {(loading === true) ? (
      <LoadingSpinner/>
    )  
    : 
    (allPlacesArr.length === 0)? 
      <Notfound/> 
      : 
      (<div className='allplaces-container d-flex flex-wrap justify-content-center align-items-center'>
          {allPlacesArr?.map((items, index) => (
              <div className="card all-places-card m-3 position-relative" style={{ width: "18rem" , height:"88vh"}} key={index}>
                  {items?.photos?.[0]? 
                  (
                      <img
                          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${items.photos[0].photo_reference}&key=${import.meta.env.VITE_API_KEY}`}
                          className="card-img-top all-places-card-img"
                          alt="Restaurant Photo"
                          style={{ height:"250px"}}
                      />
                  ):
                  <img 
                     src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600" 
                     className="card-img-top all-places-card-img"
                     style={{ height:"250px"}}
                     alt="" />
                     }
                  <div className="card-body ">
                      <div>{items?.opening_hours?.open_now === false ? <h6 style={{ color: "red" }}>CURRENTLY CLOSED</h6> : <h6 style={{ color: "green" }}>OPEN NOW</h6> }</div>
                      <div>{items.rating ? items.rating : 0} ⭐</div>
                      <h5 className="allplaces-card-title pb-2">{items?.name}</h5>
                      <p style={{fontFamily:"Sans-serif"}}>{items.formatted_address}</p>
                      <div>{items.user_ratings_total ? items.user_ratings_total : 0} users rated this place</div>
                      <div className="mb-3 position-absolute bottom-0">
                          <a 
                              href={`http://localhost:5173/map/${items.geometry.location.lat}/${items.geometry.location.lng}`}
                              className="btn btn-outline-success "
                              >
                              Explore location
                          </a>
                      </div>
                  </div>
              </div>
          ))}
      </div>
  )}
  </>
  )
}

export default Allplaces

