import React from 'react'

export const Searchbar = () => {
  return (
    <div className='searchbar'>
        <div>
            <input type="text" placeholder='search....' className="search__input" />
        </div>
        <button className='cta'>Search</button>
        
    </div>
  )
}
