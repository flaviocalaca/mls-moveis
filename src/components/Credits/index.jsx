import { getImages } from "../../utils/getImages";
import { Title, Container } from "./styles";

function Credits({ credits }) {
  return (
    <>
      <Title>Créditos</Title>
      {credits && (
        <Container>
          {credits.slice(0, 5).map((artista) => (
            <div key={artista.id}>
              <img src={getImages(artista.profile_path)} alt={artista.name} />
              <p>{artista.name}</p>
              <p>Personagem: {artista.character}</p>
            </div>
          ))}
        </Container>
      )}
    </>
  );
}

export default Credits;
