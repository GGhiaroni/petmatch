import { CiSearch } from "react-icons/ci";
import styled from "styled-components";

const ContainerPrincipal = styled.div`
  background: #ffffff;
  min-height: 100vh;
  width: 100%;
`;

const TextoPrincipal = styled.h1`
  font-size: 2.5rem;
  text-align: center;
`;

const ContainerTopo = styled.div`
  padding-top: 9rem;
  display: flex;
  flex-direction: column;
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

const PaginaEncontrar = () => {
  return (
    <ContainerPrincipal>
      <ContainerTopo>
        <TextoPrincipal>Encontre seu novo amigo</TextoPrincipal>
        <ContainerInput>
          <CiSearch size={20} color="#d4d8dE" />
          <InputEstilizado
            type="text"
            placeholder="Buscar por raça ou porte..."
            color=""
          />
        </ContainerInput>
      </ContainerTopo>
    </ContainerPrincipal>
  );
};

export default PaginaEncontrar;
