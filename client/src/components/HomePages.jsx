import './HomePages.css'
import { useEffect, useState } from 'react'
import { useMovies } from '../store/MoviesStore.js'

function HomePages() {
    useEffect(() => {
        setMoviesZu()
    },[])
    const setMoviesZu = useMovies(state => state.setMoviesZu)
    const movieZu = useMovies(state => state.movie)
    console.log(movieZu)
    const [filterMoviesByInput, setFilterMoviesByInput] = useState(movieZu)
    console.log(filterMoviesByInput)

    const addChange = (e) => {
        setFilterMoviesByInput(movieZu.filter(movie => movie.Title.includes(e.target.value) || movie.Genre.includes(e.target.value)))
    }
    const vewDisplay = filterMoviesByInput[0]? filterMoviesByInput: movieZu

    
    
        return (<>
         <nav>
      <h1>Movie Night</h1>
      <p>Search a movie and pick your seats</p>
      <p>showing {filterMoviesByInput[0]? filterMoviesByInput.length: 7} results</p>
    </nav>
            <div><input type="text" onChange={addChange} /></div>
            <section>

        {vewDisplay.map(item => {
            return (
                
                <article key={item.imdbID}>
                <div className='img'>
                    <img src={item.Images} alt="" />
                    <h2 className='title'>{item.Title}</h2>
                </div>
                <div className='info-dad'>
                    <div className='info'><span>Year</span> <span>{item.Year}</span></div>
                    <div className='info'><span>Runtime</span> <span>{item.Runtime}</span></div>
                    <div className='info'><span>Genre</span> <span>{item.Genre}</span></div>
                    <div className='info'><span>Language</span> <span>{item.Language}</span></div>
                    
                </div>
                <div className='button-select-seats'>
                    <button >select seats</button>
                </div>

                </article>
            )
        })}
      
    </section>
        </>
        )
    



}

export default HomePages
