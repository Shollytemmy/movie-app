import React from 'react'
import { Link } from 'react-router-dom'


export const ListItem = ({movies, id}) => {
  console.log(movies)
  return (
    <div className='movie'>
      <Link to={`/movieInfo/${id}`} className='movie__list'>
        {
          movies.map((movie) => {
            return(
              <div>
                <img src={movie.show.image ? movie.show.image.medium : "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"} alt={movie.name} />
              </div>
            )
          })
        }

      </Link>
      

    </div>
  )
}
