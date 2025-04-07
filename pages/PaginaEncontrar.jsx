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

  @media (max-width: 480px) {
    font-size: 2rem;
    padding-top: 7rem;
    padding-bottom: 1rem;
  }
`;

const ContainerTopo = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    flex-direction: row;
    gap: 1rem;
    padding: 1rem;
    width: 100%;
    justify-content: center;
  }
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

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
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

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 15px;
  }
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

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const LinkImagem = styled(Link)`
  width: 100%;
  display: block;
`;

const PaginaEncontrar = () => {
  const [cachorros, setCachorros] = useState([]);

  const [busca, setBusca] = useState("");

  const [buscaDebounce, setBuscaDebounce] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      setBuscaDebounce(busca);
    }, 300);

    return () => clearTimeout(delay);
  }, [busca]);

  const padronizarTextoBuscaInput = (texto) => {
    if (!texto || typeof texto !== "string") return "";
    return texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const cachorrosFiltradosPeloInput = cachorros.filter((cachorro) => {
    const buscaNormalizada = padronizarTextoBuscaInput(buscaDebounce);
    return (
      padronizarTextoBuscaInput(cachorro.nome).includes(buscaNormalizada) ||
      padronizarTextoBuscaInput(cachorro.raca).includes(buscaNormalizada) ||
      padronizarTextoBuscaInput(cachorro.porte).includes(buscaNormalizada)
    );
  });

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
            placeholder="Buscar por nome, raça ou porte..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </ContainerInput>
        <ButtonIcone>
          <CiFilter size={20} />
        </ButtonIcone>
      </ContainerTopo>
      <ContainerCardsCachorros>
        {cachorrosFiltradosPeloInput.map((cachorro, index) => (
          <CardCachorro key={index}>
            <LinkImagem
              to={`/cachorros/porte-${cachorro.porte
                .toLowerCase()
                .replace("é", "e")}/${cachorro.id}`}
            >
              <ImgCachorro
                src={cachorro.foto}
                key={index}
                alt={`Cachorro ${cachorro.nome}`}
              />
            </LinkImagem>
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
