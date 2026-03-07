import './HomePages.css'
import { useEffect } from 'react'
import { useMovies } from '../store/MoviesStore.js'

function HomePages() {
    const movieZu = useMovies(state => state.movie)
    const setMoviesZu = useMovies(state => state.setMoviesZu)
    const searchQuery = useMovies(state => state.searchQuery)
    const setSearchQuery = useMovies(state => state.setSearchQuery)
    
    
    
    useEffect(() => {
        setMoviesZu()
    },[setMoviesZu])

    const filteredMovies = movieZu.filter(movie => 
        movie.Title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        movie.Genre.toLowerCase().includes(searchQuery.toLowerCase())  
    )
    
    
        return (
        <>
            <nav>
                <h1>Movie Night</h1>
                <p>Search a movie and pick your seats</p>
                <p>showing { filteredMovies.length } results</p>
            </nav>
            <div>
                <input type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='Search by title or genre'
                 />
                
            </div>

            <section>

        {filteredMovies.map(item => (
                
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
        ))}
      
    </section>
        </>
        )
    



}

export default HomePages
