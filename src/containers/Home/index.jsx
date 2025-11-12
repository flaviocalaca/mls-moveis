import Slider from "../../components/Slider";
import { useState, useEffect } from "react";
import {
  getPopularSeries,
  getTopMovies,
  getTopPeople,
  getTopSeries,
} from "../../services/getData";
import BackgroundSlider from "../../components/BackgroundSlider";
import { TitleWrapper, TaglineText, GreenText } from "./styles";
function Home() {
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [topPeople, setTopPeople] = useState();
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getTopPeople(),
      ])
        .then(([topMovies, topSeries, popularSeries, topPeople]) => {
          setTopMovies(topMovies);
          setTopSeries(topSeries);
          setPopularSeries(popularSeries);
          setTopPeople(topPeople);
          setMovie(topMovies[0]);
        })
        .catch((error) => console.log(error));
    }
    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <BackgroundSlider items={topMovies}>
          <TitleWrapper>
            <h1>
              Bem-vindo(a) ao <GreenText>CineVerse</GreenText>.
            </h1>
            <TaglineText>
              Um universo de filmes e séries esperando por você. Mergulhe nessa
              experiência.
            </TaglineText>
          </TitleWrapper>
        </BackgroundSlider>
      )}
      {topMovies && <Slider info={topMovies} title={"Top Filmes"} />}
      {topSeries && <Slider info={topSeries} title={"Top Series"} />}
      {popularSeries && (
        <Slider info={popularSeries} title={"Series Populares"} />
      )}
      {topPeople && <Slider info={topPeople} title={"Top Atores"} />}
    </>
  );
}

export default Home;
