import styled from "styled-components";

const ContainerIcones = styled.div`
  display: flex;
  gap: 3rem;
`;

const ItemIcone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TituloIcone = styled.div`
  font-size: 1rem;
`;

const DescricaoIcone = styled.div`
  font-size: 1rem;
`;

const HeroSectionIcones = () => {
  const titulos = ["Procure", "Favorite", "Adote"];
  const descricoes = [
    "Encontre o cachorro perfeito filtrando por tamanho, idade e personalidade.",
    "Salve seus cachorros favoritos e compare para encontrar o match perfeito.",
    "Inicie o processo de adoção e dê um novo lar para um amigo especial.",
  ];

  return (
    <ContainerIcones>
      {titulos.map((titulo, index) => (
        <ItemIcone key={index}>
          <TituloIcone>{titulo}</TituloIcone>
          <DescricaoIcone>{descricoes[index]}</DescricaoIcone>
        </ItemIcone>
      ))}
      <DescricaoIcone></DescricaoIcone>
    </ContainerIcones>
  );
};

export default HeroSectionIcones;
