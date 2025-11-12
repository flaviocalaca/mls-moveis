import { useEffect, useState } from "react";
import { Container, Background, Cover, Info, ContainerMovies } from "./styles";
import { useParams } from "react-router-dom";
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
  getSeriesById,
  getSeriesCredits,
  getSeriesSimilar,
  getSeriesVideos,
} from "../../services/getData";
import { getImages } from "../../utils/getImages";
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";
import Slider from "../../components/Slider";
function Detail() {
  const { mediaType, id } = useParams();
  const [mediaDetail, setMediaDetail] = useState();
  const [mediaVideos, setMediaVideos] = useState();
  const [mediaCredits, setMediaCredits] = useState();
  const [mediaSimilar, setMediaSimilar] = useState();

  useEffect(() => {
    async function getAllData() {
      const fetchFunctions =
        mediaType === "movie"
          ? [
              getMovieById(id),
              getMovieVideos(id),
              getMovieCredits(id),
              getMovieSimilar(id),
            ]
          : [
              getSeriesById(id),
              getSeriesVideos(id),
              getSeriesCredits(id),
              getSeriesSimilar(id),
            ];

      Promise.all(fetchFunctions)
        .then(([detail, videos, credits, similar]) => {
          setMediaDetail(detail);
          setMediaVideos(videos);
          setMediaCredits(credits);
          setMediaSimilar(similar);
        })
        .catch((error) => console.log(error));
    }
    window.scrollTo(0, 0);
    getAllData();
  }, [id, mediaType]);
  return (
    <>
      {mediaDetail && (
        <>
          <Background $image={getImages(mediaDetail.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(mediaDetail.poster_path)} />
            </Cover>
            <Info>
              <h2>{mediaDetail.title || mediaDetail.name}</h2>
              <SpanGenres genres={mediaDetail.genres} />
              <p>{mediaDetail.overview}</p>
              <Credits credits={mediaCredits} />
            </Info>
          </Container>
          <ContainerMovies>
            {mediaVideos &&
              mediaVideos.map((video) => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title={`${video.name} - ${mediaDetail.title || mediaDetail.name}`}
                    loading="lazy"
                  ></iframe>
                </div>
              ))}
          </ContainerMovies>
          {mediaSimilar && (
            <Slider
              info={mediaSimilar}
              title={
                mediaType === "movie" ? "Filmes Similares" : "Séries Similares"
              }
            />
          )}
        </>
      )}
    </>
  );
}

export default Detail;
