import { getImages } from "../../utils/getImages";
import { Container } from "./styles";
import { useState } from "react";
import Modal from "../Modal";

function Card({ item }) {
    const [showModal, setShowModal] = useState(false);
  return (
    <>
    <Container onClick={() => setShowModal(true)}>
      <img
        src={getImages(item.poster_path || item.profile_path || "")}
        alt={item.title}
      />
      <h3>{item.title || item.name}</h3>
    </Container>
    {showModal && <Modal movieId={item.id} setShowModal={setShowModal}/>}
    </>
  );
}

export default Card;
