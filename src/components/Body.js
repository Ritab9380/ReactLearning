import RestuarantCard from "./RestuarantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{
   //Local State Variable-Super Powerful variable
  const [listOfRestuarant, setListOfRestuarant] = useState([]);
  const [filteredRestuarant,setFilteredRestaurant] = useState([]);
  

  const [searchText,setsearchText]=useState(" ");

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const data= await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 

    const json= await data.json();
    //console.log(json);
    setListOfRestuarant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //console.log(setListOfRestuarant);
  };


//   if(listOfRestuarant.length === 0){
//     return <Shimmer/>;
//   }

    return listOfRestuarant.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                       setsearchText(e.target.value);
                    }}/>
                    <button
                    onClick={()=>{
                      const filteredRestuarant=listOfRestuarant.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRestaurant(filteredRestuarant);  
                    console.log(filteredRestuarant);
                    }}
                    >Search
                    </button>
                </div>
                <button className="filter-btn" onClick={()=>
                {
                    const filteredList=listOfRestuarant.filter(
                        (res)=> res.info.avgRatingString >4.4
                    );
                    setListOfRestuarant(filteredList);
                     // console.log(filteredList);
                }}>Top Rated Restuarant</button>
            </div>
            <div className="res-container">
            {filteredRestuarant.map((restaurant) => (
           <RestuarantCard key={restaurant.info.id} resData={restaurant} />
      ))}
                
            </div>
        </div>
    )
};

export default Body;