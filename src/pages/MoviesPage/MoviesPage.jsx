import { Field, Form, Formik } from "formik";
import { useState, useEffect } from "react";
import { getSearchedMovies } from '../../movies-api'
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function MoviesPage() {
  const location = useLocation();
  const searchLocationParams = new URLSearchParams(location.search);
  const locationQuery = searchLocationParams.get('query');
  console.log(locationQuery);

  const [searchingMovies, setSearchingMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('')
  const [searchParms, setSearchParams] = useSearchParams();

  useEffect(() => {
    async function handleSearchedMovies() {
    try {
      const list = await getSearchedMovies(searchQuery)
      setSearchingMovies(list.data.results)
    } catch(error) {
      console.log(error);
    }
    }
    handleSearchedMovies()

  }, [searchQuery])

  const handleSubmit = (query) => {
      searchParms.set('query', query)
      setSearchParams(searchParms)
      setSearchQuery(query)
      getSearchedMovies(searchQuery)
}
  return <div>
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values) => {
        if (values.query.trim(' ')) {
          handleSubmit(values.query)
        } else {
          console.log('ERROR')
        }
      }}
    >
    <Form>
        <Field
          type="text"
          autoComplete="off"
          autoFocus
          name="query">
          </Field>
        <button type="submit">Search</button>
      </Form>
    </Formik>
        <ul>
      {searchingMovies.map((movie) => (
        <li key={movie.id}>
          <p>{movie.title}</p>
        </li>
      ))}
    </ul>
</div>
}