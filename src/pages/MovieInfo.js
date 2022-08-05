import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieInfo = () => {
  const [movieInfo, updateMovieInfo] = useState({})
  console.log('state',movieInfo)
  const {id} = useParams()

  const getSingleMovie = async () => {
    const base_url = ` https://api.tvmaze.com/shows/${id}`
    try {
      const {data} = await axios.get(base_url)
      updateMovieInfo(data)
      // console.log(data)
      
    } catch (error) {
      console.log(error)
      
    }
  }
  // function to remove html tags around text
  function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
          
    return str.replace( /(<([^>]+)>)/ig, '');
}

  useEffect(() => {
      getSingleMovie()
      //eslint-disable-next-line
    }, [])
  return (
    <div className='movieInfo'>
      <img src={movieInfo.image ? movieInfo.image.medium : "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"} alt={movieInfo.name} />

      <div className="movieInfo__detail">
        <p className="detail__name">
         <strong>Name: </strong> {movieInfo.name}
        </p>

        <p className="detail__language">
         <strong>Language: </strong> {movieInfo.language}
        </p>
        <p className="detail__rating">
         <strong>Rating: </strong> {movieInfo.rating ? movieInfo.rating.average : "No rating"}
        </p>

        <p className="detail__list">
         <strong>Genres: </strong> {movieInfo.genres ? movieInfo.genres.map((genre, i) => {
          return(
            <li key={`genre__${i}`}>{genre}</li>
          )
         }) : "No genre"}
        </p>

        <p className="detail__name">
         <strong>Url: </strong> <a href={movieInfo.url ? movieInfo.url : "No url"} target="_blank" rel="noopener noreferrer">{movieInfo.url}</a>
        </p>

        <p className="detail__summary">
         <strong>Summary: </strong> {movieInfo.summary ? removeTags(movieInfo.summary) : 'No summary'}
        </p>

      </div>

     
    </div>
  )
}
