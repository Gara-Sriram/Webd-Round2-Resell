import React, { useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";

const Card = (param) => {

 
    
  return (
    <div className='E-card'>
      <img className='P-img' src={param.src} />

      <p className='P-cost'>Cost: ₹{param.cost}</p>
  
      <p className='P-des'>{param.description}</p>
      <p className='P-seller'>seller:{param.seller}</p>
      {param. addButton }
    </div>
  )
}

export default Card
