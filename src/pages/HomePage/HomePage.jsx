import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from '../../movies-api'
import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList'
export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    async function getMoviesInfo() {
      try {
        const list = await getTrendingMovies()
        setTrendMovies(list.data.results)
      } catch(error) {
        console.log(error);
      }
    }
    getMoviesInfo()
  }, []);
  return <div >
    <h2>Trending today</h2>
    <MovieList moviesList={trendMovies} location={location}/>
</div>
}