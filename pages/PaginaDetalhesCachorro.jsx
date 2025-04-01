import { useParams } from "react-router-dom";
import styled from "styled-components";
import listaInicialCachorros from "../src/db/dogs.json";

const H1 = styled.h1`
  margin-top: 20rem;
`;

const PaginaDetalhesCachorro = () => {
  const parametroUrl = useParams();
  const cachorro = listaInicialCachorros.dogs.find(
    (cachorro) => cachorro.id === Number(parametroUrl.id)
  );

  return <H1>{cachorro.raca}</H1>;
};

export default PaginaDetalhesCachorro;
