import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

//page

import { Searchbar } from '../components/Searchbar'

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
    <div>
      <Searchbar
       searchQuery = {searchQuery}
        updateSearchQuery = {updateSearchQuery} 
        handleSearch = {handleSearch}
        movies = {movies}
         />
    </div>
  )
}
