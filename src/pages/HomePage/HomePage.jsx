
import { getTrendingMovies } from '../../movies-api'
import { useEffect, useState } from 'react';
export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState([]);

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
          <p>{movie.title}</p>
        </li>
      ))}
    </ul>
</div>
}