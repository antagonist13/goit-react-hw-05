import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const ACESS_KEY = 'd-L6wwOxVoHwVTK9MU_8WHUKXbZoMbaGJ5WvRLBqdN8'

export const getImages = async ( query, page) => {
  const response = await axios.get("/search/photos", {
      params: {
          per_page: 20,
          page: page,
            query: query
      },
      headers: {
            Authorization: `Client-ID ${ACESS_KEY}`,
          },
  });
  return response;
};