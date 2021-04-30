<template>
  <div class="movies">
    <h1 class="movies__head">Popular</h1>
    <div class="movies-list">
      <movie-card
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        :genres="genres"
        class="movies-list__item"
      />
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/home/movieCard/MovieCard'
import { fetchPopularMovies, fetchGenreMovies } from '@/requests/movies'
export default {
  components: { MovieCard },
  async asyncData({ $axios }) {
    const movies = await fetchPopularMovies($axios)
    const genres = await fetchGenreMovies($axios)
    return { movies, genres }
  },
}
</script>

<style scoped>
.movies {
  display: flex;
  flex-direction: column;
  padding: 50px 25px;
}

.movies__head {
  font-weight: 400;
  padding: 0;
  margin: 0;
  color: #191c1f;
}

.movies-list {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}

.movies-list::after {
  content: '';
  flex: auto;
}

.movies-list__item {
  margin-top: 50px;
  width: 250px;
}
</style>
