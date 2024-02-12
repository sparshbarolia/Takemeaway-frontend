import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const DetailsCarousel = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div >
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          {props?.details?.photos?.map((obj, index) => (
            <div className="carousel-item active">
              <div key={index} className='d-flex justify-content-center align-items-center' style={{ height: "50vh" }}>
                <img
                  src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${obj?.photo_reference}&key=${import.meta.env.VITE_API_KEY}`}

                  height="100%"
                  width="100%"
                />
              </div>
            </div>
          ))}
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DetailsCarousel
