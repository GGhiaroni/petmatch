import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { TbDog } from "react-icons/tb";
import styled from "styled-components";

const ContainerIcones = styled.div`
  display: flex;
  gap: 5rem;
  margin-top: 7rem;
  justify-content: center;
  padding: 0 3rem;

  @media (max-width: 768px) {
    margin-top: 6rem;
    gap: 3rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    gap: 2.5rem;
  }
`;

const ItemIcone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconeContainer = styled.div`
  background-color: #e5eefa;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconeLupaEstilizado = styled(CiSearch)`
  color: #0070f3;
  font-size: 40px;

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const IconeCoracaoEstilizado = styled(IoMdHeartEmpty)`
  color: #0070f3;
  font-size: 40px;

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const IconeCachorroEstilizado = styled(TbDog)`
  color: #0070f3;
  font-size: 40px;

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const TituloIcone = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0.7rem;
  margin-bottom: 1rem;
  color: var(--corTextoPrincipal);

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const DescricaoIcone = styled.div`
  font-size: 1rem;
  text-align: center;
  color: var(--corTexto);

  @media (max-width: 480px) {
    font-size: 1rem;
    max-width: 500px;
  }
`;

const HeroSectionIcones = () => {
  const iconesEstilizados = [
    IconeLupaEstilizado,
    IconeCoracaoEstilizado,
    IconeCachorroEstilizado,
  ];
  const titulos = ["Procure", "Favorite", "Adote"];
  const descricoes = [
    "Encontre o cachorro perfeito filtrando por tamanho, idade e personalidade.",
    "Salve seus cachorros favoritos e compare para encontrar o match perfeito.",
    "Inicie o processo de adoção e dê um novo lar para um amigo especial.",
  ];

  return (
    <ContainerIcones>
      {titulos.map((titulo, index) => {
        const Icone = iconesEstilizados[index];
        return (
          <ItemIcone key={index}>
            <IconeContainer>
              <Icone />
            </IconeContainer>
            <TituloIcone>{titulo}</TituloIcone>
            <DescricaoIcone>{descricoes[index]}</DescricaoIcone>
          </ItemIcone>
        );
      })}
    </ContainerIcones>
  );
};

export default HeroSectionIcones;
