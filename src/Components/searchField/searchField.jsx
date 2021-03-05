import React from 'react';
import "./searchField.css";
import {FaSistrix } from 'react-icons/fa';

const SearchField = ({searchChange})=>{
    return(
        <div className="searchField-container">
        <FaSistrix className="search-icon"/>
         <input
         type="search"
         onChange={searchChange}
         />
        </div>
    )
}

export default SearchField