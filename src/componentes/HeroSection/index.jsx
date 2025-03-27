import styled from "styled-components";

const HeroSectionContainer = styled.section`
  margin: 10rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H1Estilizado = styled.h1`
  font-size: 4rem;
  color: var(--corTextoPrincipal);
`;

const SpanEstilizado = styled.span`
  font-size: 1.25rem;
  color: var(--corTexto);
`;

const HeroSection = () => {
  console.log("hero section");
  return (
    <HeroSectionContainer>
      <H1Estilizado>Encontre seu novo melhor amigo</H1Estilizado>
      <SpanEstilizado>
        Conectamos cachorros adoráveis de abrigos locais com pessoas amorosas
        como você.
      </SpanEstilizado>
    </HeroSectionContainer>
  );
};

export default HeroSection;
