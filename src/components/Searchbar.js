import React from 'react'
import { ListItem } from './ListItem'

export const Searchbar = ({searchQuery, updateSearchQuery, handleSearch, movies}) => {

  const handleChange = (e) => {
    updateSearchQuery(e.target.value)
  }

  

  
  return (
    <div className='searchbar'>
        <div>
            <input type="text" placeholder='search....' className="search__input" value={searchQuery} onChange ={handleChange} />
        </div>
        <button className='cta' onClick={() =>handleSearch(searchQuery)}>Search</button>

        <ListItem movies = {movies} />
        
    </div>
  )
}
