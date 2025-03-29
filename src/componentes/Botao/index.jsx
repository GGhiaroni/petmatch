import styled from "styled-components";

const BotaoEstilizado = styled.button`
  background-color: var(--corIconesBotoes);
  padding: 12px 35px;
  border-radius: 15px;
  font-size: 1.1rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 15px;
  border: 1px solid #add8e6;
`;

const Botao = ({ children }) => {
  return <BotaoEstilizado>{children}</BotaoEstilizado>;
};

export default Botao;
