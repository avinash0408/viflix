const API_KEY="f08d0b962be8c5b6f23f93a5531ccc49";


const requests={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflix0riginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,    
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&With_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99` ,
    fetchSearch:`/search/multi?api_key=${API_KEY}&query=`,
}

export default requests;

