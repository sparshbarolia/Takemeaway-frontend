import React from 'react'
import { FaQuoteLeft , FaQuoteRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ReviewsCarousel = (props) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
      <div>
        <hr className='mt-3'/>
        <div>
            <h3>Reviews</h3>
        </div>
        <div className='d-flex flex-row flex-wrap'>
        {/* <div> */}
        {/* <Carousel 
            infinite={true}
            responsive={responsive} 
            autoPlaySpeed={3000}
            autoPlay={ true }
        > */}
              {props.reviews && props.reviews?.map((item,index) => (
                  <div 
                    className='m-2 p-3'
                    key={index} 
                    style={{ borderRadius:"15px", fontFamily:"cursive" ,width: "70%" , backgroundColor:"#e4e5f1"}}
                    >
                      <div 
                        // style={{height:"70%"}}
                      >
                        <h5><FaQuoteLeft /> {item?.text} <FaQuoteRight /></h5>
                      </div>

                    <div className='d-flex align-items-end'>
                      <div className='d-flex flex-row m-2'>
                      {/* <div className=' m-2' style={{border:"2px solid blue"}}> */}
                          <img
                              src={item?.profile_photo_url}
                              alt=""
                              height="50rem"
                              width="50rem"
                          />
                          <div className='d-flex flex-column ' style={{height:"100%" }}>
                            <div>{item.author_name}</div>
                            <div>{item.relative_time_description}</div>
                          </div>
                      </div>
                    </div>

                  </div>
              ))}
        {/* </Carousel> */}
          </div>

      </div>
  )
}

export default ReviewsCarousel
