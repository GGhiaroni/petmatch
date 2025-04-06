import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Botao from "../Botao";

const TextoInferiorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7rem;
  margin-bottom: 6rem;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 480px) {
    margin-top: 5rem;
    margin-bottom: 4rem;
  }
`;

const TextoPrincipal = styled.h3`
  color: var(--corTextoPrincipal);
  font-size: 2.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.7rem;
  }
`;

const TextoDescricao = styled.span`
  color: var(--corTexto);
  font-size: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    max-width: 500px;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    max-width: 300px;
    margin-bottom: 0.8rem;
  }
`;

const TextoInferior = () => {
  return (
    <TextoInferiorContainer>
      <TextoPrincipal>Pronto para encontrar seu companheiro?</TextoPrincipal>
      <TextoDescricao>
        Comece sua jornada de adoção hoje e mude duas vidas para sempre.
      </TextoDescricao>
      <Link to={"/encontrar"}>
        <Botao>
          Encontrar cachorros disponíveis <HiArrowLongRight />
        </Botao>
      </Link>
    </TextoInferiorContainer>
  );
};

export default TextoInferior;
