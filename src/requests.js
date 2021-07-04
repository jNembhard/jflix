const API_KEY = `${process.env.REACT_APP_API_KEY}`;

const requests = {
  getTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  getNetfilxOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  getTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  getActionMovies: `/discover/movie?api_key=${API_KEY}&with_networks=28`,
  getComedyMovies: `/discover/movie?api_key=${API_KEY}&with_networks=35`,
  getHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_networks=27`,
  getRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_networks=10749`,
  getDocumentaries: `/discover/movie?api_key=${API_KEY}&with_networks=99`,
};

export default requests;
