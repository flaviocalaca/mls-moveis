import { Container, Menu, Li } from "./styles";
import Logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [changerBackground, setChangerBackground] = useState(false);
  const { pathname } = useLocation();

  window.onscroll = () => {
    if (!changerBackground && window.pageYOffset > 150) {
      setChangerBackground(true);
    }
    if (changerBackground && window.pageYOffset <= 150) {
      setChangerBackground(false);
    }
  };
  return (
    <Container $changerBackground={changerBackground}>
      <img src={Logo} alt="Logo MlsMoveis" />
      <Menu>
        <Li $active={pathname === "/"}>
          <Link to={"/"}>Home</Link>
        </Li>
        <Li $active={pathname.includes("filmes")}>
          <Link to={"/filmes"}>Filmes</Link>
        </Li>
        <Li $active={pathname.includes("series")}>
          <Link to={"/series"}>Series</Link>
        </Li>
      </Menu>
    </Container>
  );
}

export default Header;
