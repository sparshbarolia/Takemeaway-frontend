import React from 'react'

const Allplaces = () => {
    const allplacesArr = [
           {
              "business_status" : "OPERATIONAL",
              "formatted_address" : "15 Bligh St, Sydney NSW 2000, Australia",
              "geometry" : 
              {
                 "location" : 
                 {
                    "lat" : -33.8651342,
                    "lng" : 151.2104584
                 },
                 "viewport" : 
                 {
                    "northeast" : 
                    {
                       "lat" : -33.86383727010728,
                       "lng" : 151.2118845298927
                    },
                    "southwest" : 
                    {
                       "lat" : -33.86653692989272,
                       "lng" : 151.2091848701073
                    }
                 }
              },
              "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
              "icon_background_color" : "#FF9E67",
              "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
              "name" : "Restaurant Hubert",
              "opening_hours" : 
              {
                 "open_now" : true
              },
              "photos" : 
              [
                 {
                    "height" : 2903,
                    "html_attributions" : 
                    [
                       "\u003ca href=\"https://maps.google.com/maps/contrib/114052045914866508083\"\u003eJunjie.JJ\u003c/a\u003e"
                    ],
                    "photo_reference" : "AWU5eFg9lVVjXmzrErSWHtzt0bqo_399KOemHf-nUV55hX3KPuYVfCnqPo4_bWKv5BEh63CpSSqJKDO___eZ2waMdAFRYFdgbo_3rhY23vC5uLRRRT9HTaqVAsLshkmeJSLdqtqaUD_RSaIgbTogoEzv5pp670kXGj09bZEVZdYvmXPXxEH6",
                    "width" : 3857
                 }
              ],
              "place_id" : "ChIJF5-RdGquEmsR5rN_H74uSqQ",
              "plus_code" : 
              {
                 "compound_code" : "46M6+W5 Sydney, New South Wales, Australia",
                 "global_code" : "4RRH46M6+W5"
              },
              "price_level" : 3,
              "rating" : 4.6,
              "reference" : "ChIJF5-RdGquEmsR5rN_H74uSqQ",
              "types" : 
              [
                 "restaurant",
                 "food",
                 "point_of_interest",
                 "establishment"
              ],
              "user_ratings_total" : 3638
           }] 
  return (
    <div>
        {allplacesArr.map((items) => (
            <div className="card" style={{ width: "18rem"}}>
                {/* <img src={items.icon} className="card-img-top" alt="..." /> */}
                <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${items.photos[0].photo_reference}&key=AIzaSyBErYfFhBxv_8kR3qgDv5qtgWNoNNLsn3o`} className="card-img-top" alt="Restaurant Photo" />
                <div className="card-body text-center">
                    <h5 className="card-title">{items.name}</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <a href="#" className="btn btn-primary">Explore more</a>
                </div>
            </div>
        ))}          
    </div>
  )
}

export default Allplaces

