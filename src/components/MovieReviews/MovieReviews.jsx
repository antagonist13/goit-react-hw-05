import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../movies-api';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function handleMovieReviews() {
      try {
        const list = await getMovieReviews(movieId);
        setMovieReviews(list.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    handleMovieReviews();
  }, [movieId]);

  if (isLoading) {
    return <p>Loading information...</p>;
  }

  return (
    <div>
      {movieReviews.length > 0 ? (
        <ul>
          {movieReviews.map((review) => (
            <li key={review.id}>
              <h4>{`Author: ${review.author}`}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don’t have any reviews for this movie.</p>
      )}
    </div>
  );
}