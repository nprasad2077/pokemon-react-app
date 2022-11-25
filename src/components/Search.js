import React from 'react'

function Search({handleChange, handleSubmit}) {
  return (
    <div>
        <input name='search' onChange={handleChange}></input>
        <button type='submit' onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default Search