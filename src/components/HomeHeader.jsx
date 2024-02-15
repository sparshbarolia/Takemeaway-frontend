import React, { useEffect, useRef } from 'react'

const HomeHeader = ({loc,setLoc}) => {
    const inputRef = useRef();
    const autoCompleteRef = useRef();

    //Google autocomplete to recommend cities
    //index.html me bhi ek script add kri h
    const options = {
        componentRestrictions: { country: "in" },
        // fields: ["address_components", "geometry", "icon", "name"],
        fields: ["name"],
       };
       useEffect(() => {
        autoCompleteRef.current = new window.google.maps.places.Autocomplete(
         inputRef.current,
         options
      );
      autoCompleteRef.current.addListener("place_changed", async function () {
        const place = await autoCompleteRef.current.getPlace();
            setLoc(place?.place?.name);
       });
      },[]);

      // useEffect(() => {
      //   console.log(loc);
      // },[loc])

      const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          const value = event.target.value;
          setLoc(value);
        }
      };

      const handleChange = (event) => {
        const value = event.target.value;
        setLoc(value);
      };

  return (
    <>
      <div className="search-home-container d-flex justify-content-center align-items-center" style={{ width:"100%", height:"60vh" , backgroundImage: `url(/Home_photos/home_background_photo.jpg)`}}>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className='d-inline' style={{color:"white"}}><h1>Enter Your location here:</h1></div>
                <div className="input-group mb-3">

                    <input 
                        type="text" 
                        className="form-control" 
                        onKeyDown={handleKeyDown}
                        placeholder={loc}
                        onChange={handleChange}
                        ref={inputRef}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default HomeHeader
