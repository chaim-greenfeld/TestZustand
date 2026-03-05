import './Navbar.css'
import { useMovies } from '../store/MoviesStore.js'
import { useState } from 'react'


function Navbar({addChange}) {
   
  return (
    <nav>
      <h1>Movie Night</h1>
      <p>Search a movie and pick your seats</p>
      <div><input type="text" onChange={addChange} /></div>
    </nav>
  )
}

export default Navbar
