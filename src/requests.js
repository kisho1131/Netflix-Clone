const requests = {
  fetchTrending: `/trending/all/week?api_key=d2a183f3b000917be603a0bb575c8125&language=en-us`,
  fetchNetflixOriginals: `/discover/movie?api_key=d2a183f3b000917be603a0bb575c8125&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=d2a183f3b000917be603a0bb575c8125&language=en-US`,
  fetchActionMovie: `/discover/movie?api_key=d2a183f3b000917be603a0bb575c8125&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=d2a183f3b000917be603a0bb575c8125&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=d2a183f3b000917be603a0bb575c8125&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=d2a183f3b000917be603a0bb575c8125&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=d2a183f3b000917be603a0bb575c8125&with_genres=99`,
};

export default requests;
