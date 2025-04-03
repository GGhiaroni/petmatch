import { CiCalendar, CiHeart, CiMapPin, CiRuler } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
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
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
`;

const ContainerIcone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 4rem;
  border-radius: 10px;
  border: 1px solid #e0e4e8;
  gap: 1px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.05);
`;

const TituloIcone = styled.span`
  font-size: 1rem;
  color: var(--corTextoPrincipal);
`;
const TextoIcone = styled.span`
  font-size: 0.9rem;
  color: var(--corTexto);
`;

const ContainerSobre = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoTitulo = styled.h2`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.6rem;
  color: var(--corTextoPrincipal);
`;

const PaginaDetalhesCachorro = () => {
  const parametroUrl = useParams();

  const cachorro = listaInicialCachorros.dogs.find(
    (cachorro) => cachorro.id === Number(parametroUrl.id)
  );

  const iconesContainerDetalhes = [CiCalendar, CiRuler, CiMapPin];
  const titulosIcones = ["Idade", "Porte", "Local"];

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
              <ContainerIcone key={index}>
                <Icone size={30} color="#226add" />
                <TituloIcone>{titulosIcones[index]}</TituloIcone>
                <TextoIcone>
                  {index === 0
                    ? cachorro.idade
                    : index === 1
                    ? cachorro.porte
                    : cachorro.abrigo}
                </TextoIcone>
              </ContainerIcone>
            ))}
          </ContainerInfosDestaque>
          <ContainerSobre>
            <InfoTitulo>
              <IoIosInformationCircleOutline size={25} /> Sobre {cachorro.nome}
            </InfoTitulo>
          </ContainerSobre>
        </InformacoesCachorro>
      </ContainerFotoInformacoes>
    </ContainerPrincipal>
  );
};

export default PaginaDetalhesCachorro;
