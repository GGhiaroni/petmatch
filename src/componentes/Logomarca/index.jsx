import styled from "styled-components";
import imagemPatas from "/src/assets/logo-white.png";

const Container = styled.div`
  display: flex;
`;

const H1Estilizado = styled.h1`
  color: #fff0d1;
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
