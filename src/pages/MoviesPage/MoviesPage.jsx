import { Field, Form, Formik } from "formik";
import { useState, useEffect } from "react";
import { getSearchedMovies } from '../../movies-api'
import { useSearchParams, useLocation } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList'
import css from './MoviesPage.module.css'

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
            className={css.searchInput}
          />
          <button type="submit" className={css.searchBtn}>Search</button>
        </Form>
      </Formik>
    <MovieList moviesList={searchingMovies} location={location}/>
    </div>
  );
}