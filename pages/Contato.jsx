import styled from "styled-components";

const ContainerPrincipal = styled.div`
  background: #ffffff;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  padding: 8rem 2rem;
`;

const TextoPrincipal = styled.h1`
  font-size: 2.5rem;
  text-align: center;
`;

const Contato = () => {
  return (
    <ContainerPrincipal>
      <TextoPrincipal>Entre em contato</TextoPrincipal>
    </ContainerPrincipal>
  );
};

export default Contato;
