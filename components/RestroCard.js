import React from 'react'

export default function RestroCard(props) {
    const { name, avgRating, sla, cuisines,cloudinaryImageId } = props.resData;
  return (
      <div className='res-card'>
          <img className='res-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="res thumbnail" />
          <h1>{ name}</h1>
          <h4>{avgRating} Star</h4>
          <h4>{sla.deliveryTime} Mins</h4>
          <h4>{cuisines.join(" , ")}</h4>
    </div>
  )
}
