import { HiArrowLongRight } from "react-icons/hi2";
import styled from "styled-components";
import Botao from "../Botao";

const TextoInferiorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7rem;
  margin-bottom: 6rem;
  gap: 1.5rem;
  align-items: center;
`;

const TextoPrincipal = styled.h3`
  color: var(--corTextoPrincipal);
  font-size: 2.5rem;
`;

const TextoDescricao = styled.span`
  color: var(--corTexto);
  font-size: 1.5rem;
`;

const TextoInferior = () => {
  return (
    <TextoInferiorContainer>
      <TextoPrincipal>Pronto para encontrar seu companheiro?</TextoPrincipal>
      <TextoDescricao>
        Comece sua jornada de adoção hoje e mude duas vidas para sempre.
      </TextoDescricao>
      <Botao>
        Encontrar cachorros disponíveis <HiArrowLongRight />
      </Botao>
    </TextoInferiorContainer>
  );
};

export default TextoInferior;
