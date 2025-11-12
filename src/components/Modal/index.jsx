import { useEffect, useState } from "react";
import { Container, Background } from "./styles";
import { getMovieVideos, getSeriesVideos } from "../../services/getData";
import Button from "../../components/Button";

function Modal({ movieId, setShowModal, mediaType }) {
  const [media, setMedia] = useState();

  useEffect(() => {
    async function getMedia() {
      if (mediaType === 'movie') {
        setMedia(await getMovieVideos(movieId));
      } else {
        setMedia(await getSeriesVideos(movieId));
      }
    }
    getMedia();
  }, [movieId, mediaType]);

  return (
    <Background onClick={() => setShowModal(false)}>
      {media && media.length > 0 && (
        <Container>
          <Button onClick={() => setShowModal(false)}>X</Button>
          <iframe
            src={`https://www.youtube.com/embed/${media[0].key}`}
            title="YouTube video player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  );
}

export default Modal;
