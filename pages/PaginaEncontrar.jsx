import { CiFilter, CiSearch } from "react-icons/ci";
import styled from "styled-components";

const ContainerPrincipal = styled.div`
  background: #ffffff;
  min-height: 100vh;
  width: 100%;
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

const PaginaEncontrar = () => {
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
    </ContainerPrincipal>
  );
};

export default PaginaEncontrar;
