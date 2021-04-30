export const fetchPopularMovies = async (request) => {
  const res = await request.get('/movie/popular')
  return res.data.results
}

export const fetchGenreMovies = async (request) => {
  const res = await request.get('/genre/movie/list')
  return res.data.genres
}
