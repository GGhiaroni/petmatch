import styled from "styled-components";
import Logomarca from "../Logomarca";
import favoritos from "/src/assets/icone-coracao.png";
import home from "/src/assets/icone-home.png";
import lupa from "/src/assets/icone-lupa.png";

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
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  img {
    max-width: 18px;
  }

  p {
    color: var(--corTexto);
  }
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
      src: home,
      texto: "Início",
    },
    { src: lupa, texto: "Encontrar" },
    { src: favoritos, texto: "Favoritos" },
  ];

  return (
    <HeaderEstilizado>
      <Logomarca />
      <ContainerIconesEBotao>
        <ContainterBotoesHeader>
          <UlEstilizado>
            {icones.map((icone, index) => (
              <LiEstilizado key={index}>
                <img src={icone.src} />
                <p>{icone.texto}</p>
              </LiEstilizado>
            ))}
          </UlEstilizado>
        </ContainterBotoesHeader>
        <BtnEstilizado>Quero adotar</BtnEstilizado>
      </ContainerIconesEBotao>
    </HeaderEstilizado>
  );
};

export default Header;
