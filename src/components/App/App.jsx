import css from './App.module.css'
import { getTrendingMovies, getSarchedMovies, getMovieDetails, getMovieCredits, getMovieReviews } from '../../movies-api'
import { useState } from 'react';

export default function App() {
  const [trendMovies, setTrendMovies] = useState();
  const [searchingMovies, setSearchingMovies] = useState();
  const [movieDetails, setMovieDetails] = useState();
  const [movieCredits, setMovieCredits] = useState();
  const [movieReviews, setMovieReviews] = useState();

    const  handleTrendMovies = async () => {
    await getTrendingMovies()
      .then(list => {
        setTrendMovies(list.data.results)
      })
        .finally(() => {
            console.log(trendMovies);
          })
  }
      const handleSearchMovies = async () => {
    await getSarchedMovies('batman')
      .then(list => {
        setSearchingMovies(list.data.results)
      })
      .finally(() => {
            console.log(searchingMovies);
          })
        
  }
        const handleMovieDetails = async () => {
    await getMovieDetails('111')
      .then(info => {
        setMovieDetails(info.data)
      })
      .finally(() => {
            console.log(movieDetails);
          })
        
  }
          const handleMovieCredits = async () => {
    await getMovieCredits('111')
      .then(info => {
        setMovieCredits(info.data)
      })
      .finally(() => {
            console.log(movieCredits);
          })
        
  }
            const handleMovieReviews = async () => {
    await getMovieReviews('111')
      .then(info => {
        setMovieReviews(info.data.results)
      })
      .finally(() => {
            console.log(movieReviews);
          })
        
  }

  return <div className={css.container}>
    <h1>MOVIES</h1>
    <button onClick={handleTrendMovies}> Trend Movies</button>
    <button onClick={handleSearchMovies}> Search Movies</button>
    <button onClick={handleMovieDetails}> Movie details</button>
    <button onClick={handleMovieCredits}> Movie credits</button>
    <button onClick={handleMovieReviews}> Movie reviews</button>
</div>
}