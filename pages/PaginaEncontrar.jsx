import { useEffect, useState } from "react";
import { CiFilter, CiSearch } from "react-icons/ci";
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
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #d4d8de;
`;

const ImgCachorro = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
`;

const TextoCardCachorro = styled.div`
  display: flex;
  flex-direction: column;
`;

const NomeCachorro = styled.h4`
  font-size: 1.4rem;
  display: flex;
`;

const DadosCachorro = styled.span``;

const PaginaEncontrar = () => {
  const [cachorros, setCachorros] = useState([]);

  useEffect(() => {
    setCachorros(listaInicialCachorros.dogs);
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
              <p>
                Idade:{" "}
                {Number(cachorro.idade) === 1
                  ? `${cachorro.idade} ano`
                  : `${cachorro.idade} anos`}
              </p>
              <p>Porte: {cachorro.porte}</p>
            </TextoCardCachorro>
          </CardCachorro>
        ))}
      </ContainerCardsCachorros>
    </ContainerPrincipal>
  );
};

export default PaginaEncontrar;
