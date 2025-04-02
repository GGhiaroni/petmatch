import { CiCalendar, CiHeart, CiMapPin, CiRuler } from "react-icons/ci";
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
  gap: 2.5rem;
`;

const Img = styled.img`
  height: 500px;
  width: 600px;
  border-radius: 15px;
`;

const InformacoesCachorro = styled.div`
  display: flex;
  flex-direction: column;
`;

const NomeEBotaoFavorito = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 30rem;
`;

const NomeERacaCachorro = styled.div`
  display: flex;
  flex-direction: column;
`;

const NomeCachorro = styled.h2`
  font-size: 2.2rem;
  color: var(--corTextoPrincipal);
`;

const RacaCachorro = styled.span`
  font-size: 1.1rem;
  color: var(--corTexto);
`;

const BtnFavorito = styled.button`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 8px 8px;
  border: 1px solid #d4d8de;
`;

const ContainerInfosDestaque = styled.div`
  display: flex;
`;

const PaginaDetalhesCachorro = () => {
  const parametroUrl = useParams();

  const cachorro = listaInicialCachorros.dogs.find(
    (cachorro) => cachorro.id === Number(parametroUrl.id)
  );

  const iconesContainerDetalhes = [CiMapPin, CiRuler, CiCalendar];

  return (
    <ContainerPrincipal>
      <H3Estilizado>
        <LuArrowLeft />
        Voltar para lista
      </H3Estilizado>
      <ContainerFotoInformacoes>
        <Img src={cachorro.foto} />
        <InformacoesCachorro>
          <NomeEBotaoFavorito>
            <NomeERacaCachorro>
              <NomeCachorro>{cachorro.nome}</NomeCachorro>
              <RacaCachorro>{cachorro.raca}</RacaCachorro>
            </NomeERacaCachorro>
            <BtnFavorito>
              <CiHeart size={20} />
            </BtnFavorito>
          </NomeEBotaoFavorito>
          <ContainerInfosDestaque>
            {iconesContainerDetalhes.map((Icone, index) => (
              <Icone key={index} size={20} />
            ))}
          </ContainerInfosDestaque>
        </InformacoesCachorro>
      </ContainerFotoInformacoes>
    </ContainerPrincipal>
  );
};

export default PaginaDetalhesCachorro;
