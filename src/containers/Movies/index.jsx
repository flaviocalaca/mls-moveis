import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";
import {
  Background,
  Info,
  Poster,
  Container,
  ContainerButtons,
} from "./styles";
import { useState, useEffect } from "react";
import { getMovies, getTopMovies, getTopPeople } from "../../services/getData";

function Movies() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topPeople, setTopPeople] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      Promise.all([getMovies(), getTopMovies(), getTopPeople()])
        .then(([movie, topMovies, topPeople]) => {
          setMovie(movie);
          setTopMovies(topMovies);
          setTopPeople(topPeople);
        })
        .catch((error) => console.log(error));
    }
    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <Background $img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} mediaType='movie' />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red onClick={() => navigate(`/detalhes/movie/${movie.id}`)}>
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img src={getImages(movie.poster_path)} alt="capa do filme" />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={"Top Filmes"} />}
      {topPeople && <Slider info={topPeople} title={"Top Atores"} />}
    </>
  );
}

export default Movies;
