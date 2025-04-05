import styled from "styled-components";

const ContainerPrincipal = styled.div`
  background: #ffffff;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  padding: 8rem 2rem;
`;

const TextoPrincipal = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: var(--corTextoPrincipal);
`;

const ContainerBlocos = styled.div`
  display: flex;
  gap: 10px;
`;

const BlocoEnviarMensagem = styled.div`
  padding: 1rem;
`;

const BlocoInfosContato = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const TituloBlocoMensagem = styled.h4`
  font-size: 1.8rem;
  color: var(--corTextoPrincipal);
`;

const DescricaoBlocoMensagem = styled.p`
  font-size: 1rem;
`;

const Contato = () => {
  return (
    <ContainerPrincipal>
      <TextoPrincipal>Entre em contato</TextoPrincipal>
      <ContainerBlocos>
        <BlocoEnviarMensagem>
          <TituloBlocoMensagem>Envie uma mensagem</TituloBlocoMensagem>
          <DescricaoBlocoMensagem>
            Preencha o formulário abaixo para falar conosco sobre adoção,
            doações ou voluntariado.
          </DescricaoBlocoMensagem>
        </BlocoEnviarMensagem>
        <BlocoInfosContato></BlocoInfosContato>
      </ContainerBlocos>
    </ContainerPrincipal>
  );
};

export default Contato;
