import React from 'react'
import { Link } from 'react-router-dom'




export const ListItem = ({image, name,rating,id}) => {
  
 

  return (
    <div className='movie'>
      <Link to={`/movieInfo/${id}`} >
        <img src={image} alt={name} />
        <div className="detail">
          <p>{name}</p>
          <p>{rating}</p>
        </div>
        
        

      </Link>
      

    </div>
  )
}
