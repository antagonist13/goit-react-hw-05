import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../movies-api';
import { useParams } from 'react-router-dom';
import css from './MovieCast.module.css'

export default function MovieCast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    async function handleMovieCast() {
      try {
        const list = await getMovieCredits(movieId);
        setMovieCast(list.data.cast);
      } catch (error) {
        console.log(error);
      }
    }

    handleMovieCast();
  }, [movieId]);

  return (
    <div>
      {movieCast.length > 0 ? (
        <ul className={css.castList}>
          {movieCast.map((person) => (
            <li key={person.cast_id} className={css.castListItem}>
              <img src={`https://image.tmdb.org/t/p/w300${person.profile_path}`} alt={`Photo of actor: ${person.name}`} />
              <p>{person.name}</p>
              <p>{`Character: ${person.character}`}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading cast...</p>
      )}
    </div>
  );
}