import { AiOutlineMessage } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Botao from "../Botao";
import HeroSectionIcones from "../HeroSectionIcones";

const HeroSectionContainer = styled.section`
  margin: 10rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin: 6rem auto;
  }

  @media (max-width: 480px) {
    margin: 8rem auto 2rem auto;
  }
`;

const H1Estilizado = styled.h1`
  font-size: 4rem;
  color: var(--corTextoPrincipal);
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    line-height: normal;
    margin-top: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
    line-height: normal;
  }
`;

const SpanEstilizado = styled.span`
  font-size: 1.25rem;
  color: var(--corTexto);
  margin-top: 1rem;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 500px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    max-width: 300px;
  }
`;

const ContainerBotoes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 3rem;
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
        <Link to="encontrar">
          <Botao>
            <CiSearch />
            Encontrar um amigo
          </Botao>
        </Link>
        <Link to="contato">
          <BtnContato>
            <AiOutlineMessage />
            Falar com abrigo
          </BtnContato>
        </Link>
      </ContainerBotoes>
      <HeroSectionIcones />
    </HeroSectionContainer>
  );
};

export default HeroSection;
