import styled from "styled-components";
import Logomarca from "../Logomarca";

const HeaderEstilizado = styled.header`
  background-color: #ffffff;
`;

const Header = () => {
  return (
    <HeaderEstilizado>
      <Logomarca />
    </HeaderEstilizado>
  );
};

export default Header;
