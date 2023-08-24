import React from 'react'
import "./styles.scss";
 import {useNavigate} from "react-router-dom"
 import { useState} from 'react';
function HeroBanner() {
   const [background,setBackground]=useState("");
   const[query,setQuery]=useState("");
    const navigate=useNavigate();
    const searchQueryHandler= (event) =>{
            if(event.key==="Enter" && query.length>0){
                  navigate(`/search/${query}`);
            }
    };
  return (
   <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">Millions of movies,TV shows and people to discover.
          Explore now.
          </span>
          <div className="searchInput">
             <input type="text" placeholder="search for a movie or TV show..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler} />
             <button>Search</button>
          </div>
        </div>
      </div>
   </div>
  )
}

export default HeroBanner