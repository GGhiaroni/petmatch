import { Link } from "react-router-dom";
import styled from "styled-components";
import imagemPatas from "/src/assets/logo.png";

const Container = styled.div`
  display: flex;
  img {
    max-width: 50px;
  }
  align-items: center;
`;

const H1Estilizado = styled.h1`
  color: var(--corTextoPrincipal);
  font-size: 1.5rem;
`;

const LinkEstilizado = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Logomarca = () => {
  return (
    <Container>
      <LinkEstilizado to="/">
        <img src={imagemPatas} />
        <H1Estilizado>PetMatch</H1Estilizado>
      </LinkEstilizado>
    </Container>
  );
};

export default Logomarca;
