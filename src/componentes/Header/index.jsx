import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
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

  @media (max-width: 768px) {
    display: none;
  }
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

const LinkComUnderline = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--corIconesBotoes);
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

const LinkSemUnderline = styled(Link)`
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

const MenuHamburguerBtn = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--corTexto);
  transition: transform 0.4s ease;

  ${({ girar }) => girar && `transform: rotate(180deg);`}

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuMobile = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
  background-color: #ffffff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 1100;
  animation: slideIn 0.3s ease forwards;

  @keyframes slideIn {
    from {
      right: -300px;
    }
    to {
      right: 0;
    }
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1.2rem;
    color: var(--corTexto);
    text-decoration: none;
  }
`;

const FecharMenuBtn = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--corTexto);
  cursor: pointer;
`;

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

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
    <>
      <HeaderEstilizado>
        <Logomarca />
        <ContainerIconesEBotao>
          <ContainterBotoesHeader>
            <UlEstilizado>
              {icones.map((icone, index) => (
                <LiEstilizado key={index}>
                  <LinkComUnderline to={icone.caminho}>
                    {icone.icone}
                    <p>{icone.texto}</p>
                  </LinkComUnderline>
                </LiEstilizado>
              ))}
            </UlEstilizado>
          </ContainterBotoesHeader>
          <LinkSemUnderline to="contato">
            <BtnEstilizado>Quero adotar</BtnEstilizado>
          </LinkSemUnderline>
        </ContainerIconesEBotao>
        <MenuHamburguerBtn
          girar={menuAberto}
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? <IoClose key="close" /> : <IoIosMenu key="menu" />}
        </MenuHamburguerBtn>
      </HeaderEstilizado>
      {menuAberto && (
        <MenuMobile>
          <FecharMenuBtn onClick={() => setMenuAberto(false)}>
            <IoClose />
          </FecharMenuBtn>
          {icones.map((icone, index) => (
            <Link
              key={index}
              to={icone.caminho}
              onClick={() => setMenuAberto(false)}
            >
              {icone.icone}
              {icone.texto}
            </Link>
          ))}
          <Link to="contato" onClick={() => setMenuAberto(false)}>
            <BtnEstilizado style={{ width: "100%", justifyContent: "center" }}>
              Quero adotar
            </BtnEstilizado>
          </Link>
        </MenuMobile>
      )}
    </>
  );
};

export default Header;
