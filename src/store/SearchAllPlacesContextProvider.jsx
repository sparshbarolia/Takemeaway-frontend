import React from 'react'
import {createContext, useState} from "react";

export const searchContext = createContext();

const SearchAllPlacesContextProvider = (props) => {
    const [keyword , setKeyword] = useState('');
    const [rating , setRating] = useState(5);

  return (
    <searchContext.Provider value={{keyword , setKeyword , rating , setRating}}>
        {props.children}
    </searchContext.Provider>
  )
}

export default SearchAllPlacesContextProvider
