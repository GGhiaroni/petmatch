import styled from "styled-components";
import imagemPatas from "/src/assets/logo-white.png";

const Container = styled.div`
  display: flex;
`;

const Logomarca = () => {
  return (
    <Container>
      <img src={imagemPatas} />
      <h1>PetMatch</h1>
    </Container>
  );
};

export default Logomarca;
