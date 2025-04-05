import { BsTelephone } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
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
  margin-bottom: 2rem;
`;

const ContainerBlocos = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const BlocoEnviarMensagem = styled.div`
  border: 1px solid #d4d8de;
  padding: 2rem 2rem;
  border-radius: 15px;
`;

const BlocoInfosContato = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 2rem;
`;

const BlocoIconeInfoContato = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d4d8de;
  border-radius: 15px;
  padding: 2rem 2rem;
  gap: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;

  svg {
    color: #226add;
    transition: color 0.3s ease;
  }

  &:hover {
    background-color: var(--corIconesBotoes);
    border: 1px solid #ffffff;

    h4,
    p {
      color: #ffffff;
    }

    svg {
      color: #ffffff;
    }
  }
`;

const Informacoes = styled.div`
  display: flex;
  flex-direction: column;
`;

const TituloInformacoes = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
`;

const TextoInformacoes = styled.p`
  font-size: 0.9rem;
  color: var(--corTexto);
  font-weight: 300;
`;

const TituloBlocoMensagem = styled.h4`
  font-size: 1.8rem;
  color: var(--corTextoPrincipal);
`;

const DescricaoBlocoMensagem = styled.p`
  font-size: 1rem;
  color: var(--corTexto);
  font-weight: 300;
`;

const ContainerInputsBlocoMensagem = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem 2rem;
  width: 700px;
  margin-bottom: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px 15px;
  background: transparent;
  border-radius: 10px;
  border: 1px solid #d4d8de;
  font-weight: 300;
`;

const TextArea = styled.textarea`
  margin-top: 5px;
  padding: 10px 15px;
  background: transparent;
  border-radius: 10px;
  border: 1px solid #d4d8de;
  width: 100%;
  height: 150px;
  resize: none;
  font-size: 1rem;
  color: var(--corTextoPrincipal);
  font-family: var(--fonte);
`;

const BotaoEstilizado = styled.button`
  background-color: #2f7fff;
  margin-top: 1rem;
  padding: 12px 35px;
  border-radius: 15px;
  font-size: 0.9rem;
  color: #fffffff5;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border: 1px solid #add8e6;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: var(--corHoverIconesBotoes);
  }
`;

const Contato = () => {
  const icones = [IoLocationOutline, BsTelephone, HiOutlineEnvelope];
  const titulos = ["Endereço", "Telefone", "E-mail"];
  const descricaoUm = [
    "Rua dos Animais, 123",
    "(41) 1234-5678",
    "contato@petmatch.com",
  ];
  const descricaoDois = [
    "Água Verde - Curitiba - PR",
    "Segunda a sexta, 09h às 18h",
    "Respondemos em até 24h",
  ];

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
          <ContainerInputsBlocoMensagem>
            <InputGroup>
              <Label>Nome completo</Label>
              <Input placeholder="Seu nome completo" />
            </InputGroup>
            <InputGroup>
              <Label>E-mail</Label>
              <Input placeholder="seu@email.com" />
            </InputGroup>
            <InputGroup>
              <Label>Telefone</Label>
              <Input placeholder="(00) 00000-0000" />
            </InputGroup>
            <InputGroup>
              <Label>Assunto</Label>
              <Input placeholder="Quero adotar um aumigo" />
            </InputGroup>
          </ContainerInputsBlocoMensagem>
          <Label>Mensagem</Label>
          <TextArea placeholder="Escreva sua mensagem aqui..." />
          <BotaoEstilizado>
            <FaRegPaperPlane /> Enviar mensagem
          </BotaoEstilizado>
        </BlocoEnviarMensagem>
        <BlocoInfosContato>
          {icones.map((Icone, index) => (
            <BlocoIconeInfoContato>
              <Icone key={index} size={25} style={{ marginBottom: "42px" }} />
              <Informacoes>
                <TituloInformacoes>{titulos[index]}</TituloInformacoes>
                <TextoInformacoes>{descricaoUm[index]}</TextoInformacoes>
                <TextoInformacoes>{descricaoDois[index]}</TextoInformacoes>
              </Informacoes>
            </BlocoIconeInfoContato>
          ))}
        </BlocoInfosContato>
      </ContainerBlocos>
    </ContainerPrincipal>
  );
};

export default Contato;
