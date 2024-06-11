import { Field, Form, Formik } from "formik";
import { useState, useEffect } from "react";
import { getSearchedMovies } from '../../movies-api'
import { Link, useSearchParams, useLocation } from 'react-router-dom';

export default function MoviesPage() {
  const location = useLocation();
  const searchLocationParams = new URLSearchParams(location.search);
  const locationQuery = searchLocationParams.get('query');

  const [searchingMovies, setSearchingMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    async function handleSearchedMovies() {
      try {
      const list = await getSearchedMovies(locationQuery)
        setSearchingMovies(list.data.results)
        
    } catch(error) {
      console.log(error);
      }
    }
    if (locationQuery) {
      handleSearchedMovies();
    }
  }, [locationQuery])

  const handleSubmit = (query) => {
    if (query.trim()) {
      searchParams.set('query', query);
      setSearchParams(searchParams);
    } else {
      console.log('ERROR');
    }
  };
  return (
    <div>
      <Formik
        initialValues={{ query: locationQuery || "" }}
        onSubmit={(values) => {
          handleSubmit(values.query);
        }}
      >
        <Form>
          <Field
            type="text"
            autoComplete="off"
            autoFocus
            name="query"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <ul>
        {searchingMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              <p>{movie.title}</p>
              </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}