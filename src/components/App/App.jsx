import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation'
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'));
const MovieCast = lazy(() => import('../MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'));
import css from './App.module.css'

export default function App() {

return <div className={css.container}>
  <Navigation />
  <Suspense fallback={<div>Loading page...</div>}>
  <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/movies' element={<MoviesPage />} />
      <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Route>
  </Routes>
  </Suspense>
  </div>
}
// import { getTrendingMovies, getSarchedMovies, getMovieDetails, getMovieCredits, getMovieReviews } from '../../movies-api'
// import { useState } from 'react';

  // const [trendMovies, setTrendMovies] = useState();
  // const [searchingMovies, setSearchingMovies] = useState();
  // const [movieDetails, setMovieDetails] = useState();
  // const [movieCredits, setMovieCredits] = useState();
  // const [movieReviews, setMovieReviews] = useState();

  //   const  handleTrendMovies = async () => {
  //   await getTrendingMovies()
  //     .then(list => {
  //       setTrendMovies(list.data.results)
  //     })
  //       .finally(() => {
  //           console.log(trendMovies);
  //         })
  // }
  //     const handleSearchMovies = async () => {
  //   await getSarchedMovies('batman')
  //     .then(list => {
  //       setSearchingMovies(list.data.results)
  //     })
  //     .finally(() => {
  //           console.log(searchingMovies);
  //         })
        
  // }
  //       const handleMovieDetails = async () => {
  //   await getMovieDetails('111')
  //     .then(info => {
  //       setMovieDetails(info.data)
  //     })
  //     .finally(() => {
  //           console.log(movieDetails);
  //         })
        
  // }
  //         const handleMovieCredits = async () => {
  //   await getMovieCredits('111')
  //     .then(info => {
  //       setMovieCredits(info.data)
  //     })
  //     .finally(() => {
  //           console.log(movieCredits);
  //         })
        
  // }
  //           const handleMovieReviews = async () => {
  //   await getMovieReviews('111')
  //     .then(info => {
  //       setMovieReviews(info.data.results)
  //     })
  //     .finally(() => {
  //           console.log(movieReviews);
  //         })
        
  // }
