import { useEffect, useRef, useState, Suspense } from 'react';
import {
  Link,
  useLocation,
  useParams,
  Outlet,
} from 'react-router-dom';
import { getMovieDetails } from '../../movies-api'
import css from './MovieDetailsPage.module.css'

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
        handleMovieById();
    }, [movieId])
  
  return (<>{movie && <div >
    <button className={css.returnBtn}><Link to={backLinkRef.current}>Go back</Link></button>
    <div className={css.movieContainer}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Poster of the film: ${movie.title}`} className={css.movieImg} />
      <div className={css.movieInfo}>
        <h2> {`${movie.title} (${movie.release_date.slice(0, 4)})`}</h2>
        <p> {`User Score: ${String(movie.vote_average * 10).slice(0, 2)}%`}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
      </div>
    </div>
    <hr />
    <div>
      <p className={css.addInfoText}>Additional information</p>
      <ul className={css.addInfoList}>
        <li className={css.addInfoLink}>
          <Link to="cast">
            Cast</Link></li>
        <li className={css.addInfoLink}><Link to="reviews">
            Reviews</Link></li>
      </ul>
    </div>
    <hr />
    <Suspense fallback={<p>Loading information...</p>}>
      <Outlet />
      </Suspense>
</div>}
</>) 
}

