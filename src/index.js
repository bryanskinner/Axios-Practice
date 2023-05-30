// import axios here
const axios = require('axios');
// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const api_key = 'd771b19ef336ed8381def3a60b574464'

const discoverMovie = async () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  // code here
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error('Error occurred while making the request:', error);
    throw error;
  }
}

async function getMovieById(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`;
  // code here
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error occurred while fetching movie data:', error);
    throw error;
  }
}

const getMovieByIdFailure = async () => {
  const fakeId = 1 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  // code here
  
  try {
    const response = await axios.get(url);
    return response.status;
  } catch (error) {
    if (error.response) {
      return error.response.status;
    } else {
      console.error('Error occurred while fetching movie data:', error);
      throw error;
    }
  }
}



module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}