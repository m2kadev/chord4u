import React from 'react'

const SearchForm = () => {
  return (
    <form className='search-form'>
        <div className="search-form-control">
            <div className="search-icon-wrapper">
                <img src='./img/search.svg' alt="" />
            </div>
            <input type='text' placeholder='Search for chord...' />
        </div>
    </form>
  )
}

export default SearchForm