import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
    const handleHomeClick = (title) => {
        // console.log("Clicked");
        axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${title}%20in%20Sydney&key=AIzaSyBErYfFhBxv_8kR3qgDv5qtgWNoNNLsn3o`)
        .then((res) => console.log(res.json))
        .catch((error) => {
            console.error('Error fetching data:');
        });
    }

    const homeArr = [
        {cardTitle: "Bakery"},
        {cardTitle: "Bar"},
        {cardTitle: "Cafe"},
        {cardTitle: "Fats food restaurant"},
        {cardTitle: "Ice Cream Shop"},
        {cardTitle: "Chinese Restaurant"},
        {cardTitle: "Pizza Place"},
        {cardTitle: "Sushi Restaurant"},
        {cardTitle: "Thai Restaurant"},
        {cardTitle: "Vegetarian Restaurant"},
    ]

  return (
    <div className='home-container d-flex flex-wrap justify-content-center align-items-center'>
        {homeArr.map((items) => (
            <Link 
                className="card homecard m-2" 
                style={{ width: "15rem" , height: "10rem"}} 
                onClick={() => handleHomeClick(items.cardTitle)}
                key={items.cardTitle}>
            {/* <img src="..." className="card-img-top" alt="..."/> */}
                <div className="card-body d-flex justify-content-center align-items-center">
                    <h5 className="card-title">{items.cardTitle}</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
        </Link>
        ))}
    </div>
  )
}

export default Home
