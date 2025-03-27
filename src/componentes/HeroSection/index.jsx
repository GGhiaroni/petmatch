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
  margin-top: 1rem;
`;

const ContainerBotoes = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 3rem;
`;

const BtnEncontrar = styled.button`
  background-color: var(--corIconesBotoes);
  padding: 10px 30px;
  border-radius: 8px;
  font-size: 1.1rem;
  color: #ffffff;
`;

const BtnContato = styled.button`
  background-color: #ffffff;
  padding: 10px 30px;
  border-radius: 8px;
  font-size: 1.1rem;
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
      <ContainerBotoes>
        <BtnEncontrar>Encontrar um amigo</BtnEncontrar>
        <BtnContato>Falar com abrigo</BtnContato>
      </ContainerBotoes>
    </HeroSectionContainer>
  );
};

export default HeroSection;
