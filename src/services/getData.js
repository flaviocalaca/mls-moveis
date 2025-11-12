import api from "./api";

export async function getMovies() {
  const {
    data: { results },
  } = await api.get("/movie/popular");
  console.log(results);
  return results[0];
}

export async function getTopMovies() {
  const {
    data: { results },
  } = await api.get("/movie/top_rated");
  return results;
}

export async function getTopSeries() {
  const {
    data: { results },
  } = await api.get("/tv/top_rated");
  return results;
}

export async function getPopularSeries() {
  const {
    data: { results },
  } = await api.get("tv/on_the_air");
  return results;
}

export async function getTopPeople() {
  const {
    data: { results },
  } = await api.get("/person/popular");
  return results;
}

export async function getMovieVideos(movieId) {
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/videos`);
  console.log(results);
  return results
}

export async function getMovieCredits(movieId) {
  const {
    data: { cast },
  } = await api.get(`/movie/${movieId}/credits`);
  return cast;
}

export async function getMovieSimilar(movieId) {
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/similar`);
  return results;
}

export async function getMovieById(movieId) {
  const { data } = await api.get(`/movie/${movieId}`);
  return data;
}

export async function getSeriesById(seriesId) {
  const { data } = await api.get(`/tv/${seriesId}`);
  return data;
}

export async function getSeriesCredits(seriesId) {
  const {
    data: { cast },
  } = await api.get(`/tv/${seriesId}/credits`);
  return cast;
}

export async function getSeriesSimilar(seriesId) {
  const {
    data: { results },
  } = await api.get(`/tv/${seriesId}/similar`);
  return results;
}

export async function getSeriesVideos(seriesId) {
  const {
    data: { results },
  } = await api.get(`/tv/${seriesId}/videos`);
  return results;
}
