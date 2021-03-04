import React from 'react';
import "./searchField.css";
import {FaSistrix } from 'react-icons/fa';

const SearchField = ()=>{
    return(
        <div className="searchField-container">
        <FaSistrix className="search-icon"/>
         <input
         type="search"
         />
        </div>
    )
}

export default SearchField