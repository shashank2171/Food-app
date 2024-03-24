import React, { useEffect, useState } from 'react';
import Card from './Card';
import { restaurantList } from '../config';

function filterData(searchText, restaurants){
  const filterData = restaurants.filter((restaurant)=>
   restaurant.info.name.includes(searchText)
  );
  console.log(filterData);
  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(" ");

  useEffect(()=>{
    getRestaurants();
  },[])

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.49870&lng=77.66690&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    .then(data => data.json())
    .then( json => {
      console.log(json);
      setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    })
    

    // const json = await data.json();
    // console.log(json);
    // setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(restaurants);
  }
  
  return (
    <>
    <div className="search-box">
      <input
        className='search-input'
        type="text"
        placeholder="search"
        value={searchText}
        onChange={(e)=>{
          setSearchText(e.target.value);
        }}
      />
      <button 
      className='search-btn'
      onClick={()=>{
        //need to filter data
        const data = filterData(searchText, restaurants);
        //update the state - restaurants
        setRestaurants(data);
      }}
      >
        search
      </button>
    </div>
    <div className='restuarant-list'>
      {restaurants.map((restaurant)=>{
        console.log(restaurant.info)
        let res = restaurant.info
        return (
          <Card data = {res} key={res.id} cloudinaryImageId={res.cloudinaryImageId} name={res.name}
            area={res.locality} costForTwoString={res.costForTwo} />
        );
      })
      }
      </div>
    </>
  );
};
export default Body
