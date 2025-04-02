import { LuArrowLeft } from "react-icons/lu";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import listaInicialCachorros from "../src/db/dogs.json";

const ContainerPrincipal = styled.div`
  background: #ffffff;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  padding: 8rem 2rem;
`;

const H3Estilizado = styled.h3`
  font-size: 1.1rem;
  color: #3c83f6;
  font-weight: 300;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ContainerFotoInformacoes = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;

const Img = styled.img`
  height: 500px;
  width: 600px;
  border-radius: 15px;
`;

const PaginaDetalhesCachorro = () => {
  const parametroUrl = useParams();
  const cachorro = listaInicialCachorros.dogs.find(
    (cachorro) => cachorro.id === Number(parametroUrl.id)
  );

  return (
    <ContainerPrincipal>
      <H3Estilizado>
        <LuArrowLeft />
        Voltar para lista
      </H3Estilizado>
      <ContainerFotoInformacoes>
        <Img src={cachorro.foto} />
      </ContainerFotoInformacoes>
    </ContainerPrincipal>
  );
};

export default PaginaDetalhesCachorro;
