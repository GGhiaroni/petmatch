import { AiOutlineMessage } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import styled from "styled-components";
import HeroSectionIcones from "../HeroSectionIcones";

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
  padding: 12px 35px;
  border-radius: 15px;
  font-size: 1.1rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 15px;
  border: 1px solid #add8e6;
`;

const BtnContato = styled.button`
  background-color: #ffffff;
  padding: 10px 30px;
  border-radius: 15px;
  font-size: 1.1rem;
  color: var(--corTexto);
  display: flex;
  align-items: center;
  gap: 15px;
  border: 1px solid #dfe1e4;
`;

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <H1Estilizado>Encontre seu novo melhor amigo</H1Estilizado>
      <SpanEstilizado>
        Conectamos cachorros adoráveis de abrigos locais com pessoas amorosas
        como você.
      </SpanEstilizado>
      <ContainerBotoes>
        <BtnEncontrar>
          <CiSearch />
          Encontrar um amigo
        </BtnEncontrar>
        <BtnContato>
          <AiOutlineMessage />
          Falar com abrigo
        </BtnContato>
      </ContainerBotoes>
      <HeroSectionIcones />
    </HeroSectionContainer>
  );
};

export default HeroSection;
