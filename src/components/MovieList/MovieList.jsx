import { Link } from 'react-router-dom';
import css from './MovieList.module.css'

export default function MovieList({ moviesList, location }) {
  return <div >
    <ul>
      {moviesList.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <p className={css.hotPink}>{movie.title}</p>
              </Link>
          </li>
      ))}
    </ul>
</div>
}