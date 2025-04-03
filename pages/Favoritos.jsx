import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import cachorros from "../src/db/dogs.json";

const ContainerPrincipal = styled.div`
  background: #ffffff;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  padding: 8rem 2rem;
`;

const TextoPrincipal = styled.h1`
  font-size: 2.5rem;
  text-align: center;
`;

const ContainerCardsCachorros = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 20px;
  padding: 30px;
  margin-top: 20px;
`;

const CardCachorro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #d4d8de;
  width: 100%;
  overflow: hidden;
  padding-bottom: 20px;
`;

const ContainerImagem = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

const ImgCachorro = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }
`;

const TextoCardCachorro = styled.div`
  width: 100%;
  padding: 25px 30px;
  display: flex;
  flex-direction: column;
`;

const NomeCachorro = styled.h4`
  font-size: 1.6rem;
  margin-bottom: 5px;
`;

const DadosCachorro = styled.span`
  font-size: 1rem;
  color: #6b7280;
`;

const BotaoEstilizado = styled.button`
  background-color: #2f7fff;
  padding: 12px 35px;
  border-radius: 15px;
  font-size: 0.9rem;
  color: #fffffff5;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border: 1px solid #add8e6;
  width: 380px;
  cursor: pointer;
  &:hover {
    background-color: var(--corHoverIconesBotoes);
  }
`;

const BtnRemoverFavoritos = styled.button`
  background-color: #de3f3f;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25%;
  width: 35px;
  height: 35px;
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  cursor: pointer;
  z-index: 10;
  transition: background 0.3s ease;

  &:hover {
    background-color: #c53030;
  }
`;

const Favoritos = () => {
  return (
    <ContainerPrincipal>
      <TextoPrincipal>Meus favoritos</TextoPrincipal>
      <ContainerCardsCachorros>
        {cachorros.dogs.map((cachorro, index) => (
          <CardCachorro>
            <ContainerImagem>
              <BtnRemoverFavoritos>
                <FiTrash2 size={15} color="#FFFFFF" />
              </BtnRemoverFavoritos>
              <ImgCachorro
                src={cachorro.foto}
                key={index}
                alt={`Cachorro ${cachorro.nome}`}
              />
            </ContainerImagem>
            <TextoCardCachorro>
              <NomeCachorro>{cachorro.nome}</NomeCachorro>
              <DadosCachorro>Raça: {cachorro.raca}</DadosCachorro>
              <DadosCachorro>
                Idade:{" "}
                {Number(cachorro.idade) === 1
                  ? `${cachorro.idade} ano`
                  : `${cachorro.idade} anos`}
              </DadosCachorro>
              <DadosCachorro>Porte: {cachorro.porte}</DadosCachorro>
            </TextoCardCachorro>
            <Link
              to={`/cachorros/porte-${cachorro.porte
                .toLowerCase()
                .replace("é", "e")}/${cachorro.id}`}
            >
              <BotaoEstilizado>Ver detalhes</BotaoEstilizado>
            </Link>
          </CardCachorro>
        ))}
      </ContainerCardsCachorros>
    </ContainerPrincipal>
  );
};

export default Favoritos;
