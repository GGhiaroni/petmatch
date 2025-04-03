import { useEffect, useState } from "react";
import { CiFilter, CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import styled from "styled-components";
import listaInicialCachorros from "../src/db/dogs.json";

const ContainerPrincipal = styled.div`
  background: #ffffff;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const TextoPrincipal = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  padding-top: 9rem;
`;

const ContainerTopo = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`;

const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  border-radius: 10px;
  padding: 10px 15px;
  width: 500px;
  border: 1px solid #d4d8de;
`;

const InputEstilizado = styled.input`
  border: none;
  background: transparent;
  outline: none;
  font-size: 1rem;
  flex: 1;

  ::placeholder {
    color: #d4d8de;
  }
`;

const ButtonIcone = styled.button`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 10px 15px;
  border: 1px solid #d4d8de;
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

const PaginaEncontrar = () => {
  const [cachorros, setCachorros] = useState([]);

  useEffect(() => {
    const misturarArray = (array) => {
      let novoArray = [...array];
      for (let i = novoArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [novoArray[i], novoArray[j]] = [novoArray[j], novoArray[i]];
      }
      return novoArray;
    };
    setCachorros(misturarArray(listaInicialCachorros.dogs));
  }, []);

  return (
    <ContainerPrincipal>
      <TextoPrincipal>Encontre seu novo amigo</TextoPrincipal>
      <ContainerTopo>
        <ContainerInput>
          <CiSearch size={20} />
          <InputEstilizado
            type="text"
            placeholder="Buscar por raça ou porte..."
            color=""
          />
        </ContainerInput>
        <ButtonIcone>
          <CiFilter size={20} />
        </ButtonIcone>
      </ContainerTopo>
      <ContainerCardsCachorros>
        {cachorros.map((cachorro, index) => (
          <CardCachorro>
            <ImgCachorro
              src={cachorro.foto}
              key={index}
              alt={`Cachorro ${cachorro.nome}`}
            />
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

export default PaginaEncontrar;
