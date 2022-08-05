import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

//page

import { Searchbar } from '../components/Searchbar'
import { ListItem } from '../components/ListItem'

// https://api.tvmaze.com/search/shows?q=boys

export const Home = () => {
  const [movies, updateMovies] = useState([])
  const [searchQuery, updateSearchQuery] = useState('')

  const handleSearch = async(searchQuery) => {
    const base_url = `https://api.tvmaze.com/search/shows?q=${searchQuery}`
    try {
      const {data} = await axios.get(base_url)
    // console.log(data)
    updateMovies(data)
    updateSearchQuery('')
      
    } catch (error) {
      console.log(error)
      
    }
    // console.log(movies)
    
    

  }

  
  return (
    <>
      <Searchbar
       searchQuery = {searchQuery}
        updateSearchQuery = {updateSearchQuery} 
        handleSearch = {handleSearch}
        movies = {movies}
         />
         <div className='movie__list'>
          {
          movies.map((movie) => {
            return(
              <div className='movie__list'>
                <ListItem 
                key={movie.show.id}
                image = {movie.show.image ? movie.show.image.medium : "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"}

                name = {movie.show.name}
                rating = {movie.show.rating.average ? movie.show.rating.average : 'No rating'}
                id = {movie.show.id}
                
                
                />

                


              </div>
            )
          })
        }

         </div>

         
    </>
  )
}
