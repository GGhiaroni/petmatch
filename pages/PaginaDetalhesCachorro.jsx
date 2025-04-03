import { useState } from "react";
import { CiCalendar, CiHeart, CiMapPin, CiRuler } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { LuArrowLeft } from "react-icons/lu";
import { Link, useParams } from "react-router-dom";
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
  width: 200px;
`;

const ContainerFotoInformacoes = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 2.5rem;
`;

const Img = styled.img`
  height: 500px;
  width: 620px;
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

const SobreTexto = styled.h4`
  font-size: 1rem;
  color: var(--corTexto);
  font-weight: 300;
`;

const BotaoEstilizado = styled.button`
  background-color: #2f7fff;
  margin-top: 2rem;
  padding: 12px 35px;
  border-radius: 15px;
  font-size: 0.9rem;
  color: #fffffff5;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border: 1px solid #add8e6;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: var(--corHoverIconesBotoes);
  }
`;

const ContainerInferiorImagens = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 1rem;
`;

const ImgContainerInferior = styled.img`
  border-radius: 15px;
  height: 100px;
  width: 120px;
  cursor: pointer;
`;

const ImgContainerInferiorSelecionada = styled.img`
  border-radius: 15px;
  height: 100px;
  width: 120px;
  border: 3px solid var(--corHoverIconesBotoes);
  cursor: pointer;
`;

const PaginaDetalhesCachorro = () => {
  const parametroUrl = useParams();

  const cachorro = listaInicialCachorros.dogs.find(
    (cachorro) => cachorro.id === Number(parametroUrl.id)
  );

  const iconesContainerDetalhes = [CiCalendar, CiRuler, CiMapPin];
  const titulosIcones = ["Idade", "Porte", "Local"];

  const [fotoSelecionada, setFotoSelecionada] = useState(1);

  const selecionarFoto = (id) => {
    setFotoSelecionada(id);
  };

  return (
    <ContainerPrincipal>
      <Link to="/encontrar">
        <H3Estilizado>
          <LuArrowLeft />
          Voltar para lista
        </H3Estilizado>
      </Link>
      <ContainerFotoInformacoes>
        <Img
          src={
            fotoSelecionada === 1
              ? cachorro.foto
              : fotoSelecionada === 2
              ? cachorro.foto2
              : cachorro.foto3
          }
          alt={cachorro.nome}
        />
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
            <SobreTexto>{cachorro.bio}</SobreTexto>
          </ContainerSobre>
          <BotaoEstilizado>Quero adotar</BotaoEstilizado>
        </InformacoesCachorro>
      </ContainerFotoInformacoes>
      <ContainerInferiorImagens>
        {fotoSelecionada === 1 ? (
          <ImgContainerInferiorSelecionada
            src={cachorro.foto}
            alt={cachorro.nome}
            onClick={() => selecionarFoto(1)}
          />
        ) : (
          <ImgContainerInferior
            src={cachorro.foto}
            alt={cachorro.nome}
            onClick={() => selecionarFoto(1)}
          />
        )}
        {fotoSelecionada === 2 ? (
          <ImgContainerInferiorSelecionada
            src={cachorro.foto2}
            alt={cachorro.nome}
            onClick={() => selecionarFoto(2)}
          />
        ) : (
          <ImgContainerInferior
            src={cachorro.foto2}
            alt={cachorro.nome}
            onClick={() => selecionarFoto(2)}
          />
        )}
        {fotoSelecionada === 3 ? (
          <ImgContainerInferiorSelecionada
            src={cachorro.foto3}
            alt={cachorro.nome}
            onClick={() => selecionarFoto(3)}
          />
        ) : (
          <ImgContainerInferior
            src={cachorro.foto3}
            alt={cachorro.nome}
            onClick={() => selecionarFoto(3)}
          />
        )}
      </ContainerInferiorImagens>
    </ContainerPrincipal>
  );
};

export default PaginaDetalhesCachorro;
