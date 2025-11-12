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
import {
  getPopularSeries,
  getTopPeople,
  getTopSeries,
} from "../../services/getData";
function Series() {
  const [showModal, setShowModal] = useState(false);
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [topPeople, setTopPeople] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getTopSeries(),
        getPopularSeries(),
        getTopPeople(),
      ])
        .then(([topSeries, popularSeries, topPeople]) => {
          setTopSeries(topSeries);
          setPopularSeries(popularSeries);
          setTopPeople(topPeople);
        })
        .catch((error) => console.log(error));
    }

    getAllData();
  }, []);

  return (
    <>
      {topSeries && (
        <Background $img={getImages(topSeries[0].backdrop_path)}>
          {showModal && (
            <Modal movieId={topSeries[0].id} setShowModal={setShowModal} mediaType='tv' />
          )}
          <Container>
            <Info>
              <h1>{topSeries[0].original_name}</h1>
              <p>{topSeries[0].overview}</p>
              <ContainerButtons>
                <Button red onClick={() => navigate(`/detalhes/tv/${topSeries[0].id}`)}>
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img src={getImages(topSeries[0].poster_path)} alt="capa do filme" />
            </Poster>
          </Container>
        </Background>
      )}
      {topSeries && <Slider info={topSeries} title={"Top Series"} />}
      {popularSeries && (
        <Slider info={popularSeries} title={"Series Populares"} />
      )}
      {topPeople && <Slider info={topPeople} title={"Top Atores"} />}
    </>
  );
}

export default Series;
