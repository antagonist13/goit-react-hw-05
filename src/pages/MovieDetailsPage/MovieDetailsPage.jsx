import { useEffect, useRef, useState } from 'react';
import {
  Link,
  useLocation,
  useParams,
  Outlet,
} from 'react-router-dom';
import { getMovieDetails } from '../../movies-api'
export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/movies');
  const [movie, setMovie] = useState(null);

    useEffect(() => {
    async function handleMovieById() {
      try {
      const list = await getMovieDetails(movieId)
        setMovie(list.data)
    } catch(error) {
      console.log(error);
      }
      }
      if (movie == null) {
        handleMovieById();
      }
    }, [movie])
  
  return (<>{movie && <div >
    <button><Link to={backLinkRef.current}>Go back</Link></button>
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Poster of the film: ${movie.title}`} />
      <div>
      <h2> {`${movie.title} (${movie.release_date.slice(0, 4)})`}</h2>
      <p> {`User Score: ${String(movie.vote_average * 10).slice(0, 2)}%`}</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h4>Genres</h4>
        <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
        </div>
    </div>
    <div>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">
            Cast</Link></li>
        <li><Link to="reviews">
            Reviews</Link></li>
      </ul>
    </div>
    <Outlet />
</div>}
</>) 
}

