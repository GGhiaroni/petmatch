import { AiOutlineHome } from "react-icons/ai";
import { CiHeart, CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logomarca from "../Logomarca";

const HeaderEstilizado = styled.header`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2.5rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const ContainterBotoesHeader = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ContainerIconesEBotao = styled.div`
  display: flex;
  gap: 2rem;
`;

const UlEstilizado = styled.ul`
  display: flex;
  gap: 1.5rem;
`;

const LiEstilizado = styled.li`
  display: flex;
  align-items: center;
  svg {
    color: var(--corTexto);
  }

  p {
    color: var(--corTexto);
  }

  &:hover {
    svg,
    p {
      color: var(--corIconesBotoes);
    }
  }
`;

const LinkEstilizado = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BtnEstilizado = styled.button`
  background-color: var(--corIconesBotoes);
  color: #ffffff;
  font-size: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 1rem;

  &:hover {
    background-color: var(--corHoverIconesBotoes);
  }
`;

const Header = () => {
  const icones = [
    {
      icone: <AiOutlineHome size={20} />,
      caminho: "/",
      texto: "Início",
    },
    { icone: <CiSearch size={20} />, caminho: "encontrar", texto: "Encontrar" },
    { icone: <CiHeart size={20} />, caminho: "favoritos", texto: "Favoritos" },
  ];

  return (
    <HeaderEstilizado>
      <Logomarca />
      <ContainerIconesEBotao>
        <ContainterBotoesHeader>
          <UlEstilizado>
            {icones.map((icone, index) => (
              <LiEstilizado key={index}>
                <LinkEstilizado to={icone.caminho}>
                  {icone.icone}
                  <p>{icone.texto}</p>
                </LinkEstilizado>
              </LiEstilizado>
            ))}
          </UlEstilizado>
        </ContainterBotoesHeader>
        <LinkEstilizado to="contato">
          <BtnEstilizado>Quero adotar</BtnEstilizado>
        </LinkEstilizado>
      </ContainerIconesEBotao>
    </HeaderEstilizado>
  );
};

export default Header;
