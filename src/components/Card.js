import React from 'react';

const Card = (
  {
    cloudinaryImageId, 
    name, 
    area, 
    costForTwoString}) => {

  return (
    <div className="restuarant-list">
    <div className = "card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
      + cloudinaryImageId} placeholder="card image"/>
      <div className='card-details'>
      <h2>{name}</h2>
      <h3>{area}</h3>
      <p>{costForTwoString}</p>
    
      </div> 
      </div>
    </div>
  )
}

export default Card
