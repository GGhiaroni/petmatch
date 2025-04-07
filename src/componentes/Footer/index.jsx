import styled from "styled-components";

const FooterEstilizado = styled.footer`
  background-color: #307af0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  padding: 1rem 2rem;
  gap: 30px;
  font-weight: 300;

  @media (max-width: 480px) {
    font-size: 1rem;
    gap: 10px;
  }
`;

const Footer = () => {
  return (
    <FooterEstilizado>
      <p>PetMatch® 2025</p>
      <p>Todos os direitos reservados.</p>
    </FooterEstilizado>
  );
};

export default Footer;
