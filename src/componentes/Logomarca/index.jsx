import styled from "styled-components";
import imagemPatas from "/src/assets/logo.png";

const Container = styled.div`
  display: flex;
  gap: 5px;
  img {
    max-width: 50px;
  }
  align-items: center;
`;

const H1Estilizado = styled.h1`
  color: var(--corTextoPrincipal);
  font-size: 1.5rem;
`;

const Logomarca = () => {
  return (
    <Container>
      <img src={imagemPatas} />
      <H1Estilizado>PetMatch</H1Estilizado>
    </Container>
  );
};

export default Logomarca;
