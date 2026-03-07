import './Navbar.css'



function Navbar({ searchQuery, setSearchQuery, resultsCount }) {
   
  return (
    <nav>
      <h1>Movie Night</h1>
      <p>Search a movie and pick your seats</p>
      <p>showing { resultsCount } results</p>
      <div>
        <input type="text" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='Search by title or genre'
        />
        </div>
    </nav>
  )
}

export default Navbar
