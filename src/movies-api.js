import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const ACESS_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjRiY2QwNTg4YzE4MWE3NTAwMDk3MzhiNjQ2MDBjNyIsInN1YiI6IjY2NjMyNzQ4M2VjNzk2YWI3NjE0ZmM3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6wE9XVMKUlpEUmGCB_RwR2MwQwC1A6qGjx6P57kh1Uc'

export const getTrendingMovies = async ( ) => {
  const response = await axios.get("/trending/movie/day", {
      params: {
          language: 'en-US',
      },
      headers: {
            Authorization: `Bearer ${ACESS_KEY}`,
          },
  });
  return response;
};
export const getSarchedMovies = async ( query ) => {
  const response = await axios.get("/search/movie", {
    params: {
      query: query,
      include_adult: false,
      language: 'en-US',
      page: 1
      },
      headers: {
            Authorization: `Bearer ${ACESS_KEY}`,
          },
  });
  return response;
};
export const getMovieDetails = async ( movieID ) => {
  const response = await axios.get(`/movie/${movieID}`, {
    params: {
      language: 'en-US',
      },
      headers: {
            Authorization: `Bearer ${ACESS_KEY}`,
          },
  });
  return response;
};
export const getMovieCredits = async ( movieID ) => {
  const response = await axios.get(`/movie/${movieID}/credits`, {
    params: {
      language: 'en-US',
      },
      headers: {
            Authorization: `Bearer ${ACESS_KEY}`,
          },
  });
  return response;
};
export const getMovieReviews = async ( movieID ) => {
  const response = await axios.get(`/movie/${movieID}/reviews`, {
    params: {
      language: 'en-US',
      },
      headers: {
            Authorization: `Bearer ${ACESS_KEY}`,
          },
  });
  return response;
};