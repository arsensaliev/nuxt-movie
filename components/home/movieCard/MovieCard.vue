<template>
  <div class="movie">
    <div class="movie__rating-wrapper">
      <div class="movie__rating">{{ movie.vote_average }}</div>
    </div>
    <div class="movie__preview">
      <img
        :src="getFullImagePath(movie.poster_path)"
        alt="Movie Poster"
        class="movie__poster"
      />
    </div>
    <div class="movie__name">{{ movie.title }}</div>
    <div class="movie__genre">{{ getMovieGenres(movie.genre_ids) }}</div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => {},
    },
    genres: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    getFullImagePath(path) {
      return `https://image.tmdb.org/t/p/w500${path}`
    },
    getMovieGenres(genreIds) {
      const movieGenres = []
      for (let i = 0; i < genreIds.length; i++) {
        for (let k = 0; k < this.genres.length; k++) {
          if (genreIds[i] === this.genres[k].id) {
            movieGenres.push(this.genres[k].name)
          }
        }
      }

      return movieGenres.join(', ')
    },
  },
}
</script>

<style scoped>
.movie {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
}

.movie__rating-wrapper {
  display: flex;
  justify-content: center;
}

.movie__rating {
  position: absolute;
  z-index: 1;
  color: white;
  width: 40px;
  height: 25px;
  border-radius: 16px;
  background: #fcbd34;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
}

.movie__preview {
  width: 100%;
  margin-top: 10px;
}

.movie__poster {
  width: 100%;
}

.movie__name {
  color: #191c1f;
  margin-top: 15px;
  font-size: 18px;
}

.movie__genre {
  margin-top: 5px;
  font-size: 14px;
  color: #6db8ea;
}
</style>
