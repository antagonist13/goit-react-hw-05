import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from '../../movies-api'
import { useEffect, useState } from 'react';
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
    <ul>
      {trendMovies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
              <p>{movie.title}</p>
              </Link>
          </li>
      ))}
    </ul>
</div>
}