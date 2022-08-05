import React from 'react'
import { Link } from 'react-router-dom'

// external package react-icons
import {BsFillSuitHeartFill} from 'react-icons/bs'




export const ListItem = ({image, name,rating,id}) => {
  
 

  return (
    <div className='movie'>
      <Link to={`/movieInfo/${id}`} >
        <img src={image} alt={name} />
        <div className="detail">
          <BsFillSuitHeartFill style={{color: 'red'}} />
          <p>{name}</p>
          <p>{rating}</p>
        </div>
        
        

      </Link>
      

    </div>
  )
}
