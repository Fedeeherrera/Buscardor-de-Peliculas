import Movies from './components/Movies'
import responseMovies from "./mocks/with-results.json";
//import renderNoResults from "./mocks/no-results.json";
import "./app.css";

function App() {
  const movies = responseMovies.Search;

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    year: movie.Year,
    tittle : movie.Title,
    poster : movie.Poster
  }))


  return (
    <>
      <div className="page">
        <header>
          <h1>Buscador De Peliculas</h1>
          <form className="form">
            <input placeholder="Avengers, Star Wars..." type="text" />
            <button type="submit">Search</button>
          </form>
        </header>

        <main><Movies movies={mappedMovies}/></main>
      </div>
    </>
  );
}

export default App;
