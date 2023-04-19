import { SectionDescription } from "@src/components/template/SectionDescription";
import { Container, Content } from "./styles";
import { DropDown } from "@src/components/DropDown";

type DifferentialsSectionProps = {};

export function DifferentialsSection(props: DifferentialsSectionProps) {
  return (
    <Container>
      <SectionDescription
        title="Diferenciais"
        subtitle="Clique para saber mais sobre cada uma"
      />
      <Content>
        <DropDown
          title="Metodologias ágeis"
          description="Faço uso da metodologia ágil Scrum para o criar um fluxo de desenvolvimento organizado, onde realizo pequenas entregas do software de modo frequente e sempre obtenho o feedback do cliente para que o sistema em questão possa ter um avanço saudável."
        />
        <DropDown
          title="Protótipo de interfaces"
          description="Crio um protótipo das interfaces do sistema baseada nas solicitações do cliente. É através dela é que acontece maior parte da validação do projeto."
        />
        <DropDown
          title="Código limpo"
          description="Quanto a programar um sistema, a nível de código, eu faço uso do que se chama de boas práticas. Isso garante que a manutenção, atualização ou o mínimo ajuste no sistema não sejam tarefas trabalhosas."
        />
        <DropDown
          title="Tecnologias populares"
          description="Escolher a tecnologia para um projeto também é uma tarefa importante. Eu escolhi fazer uso de duas muito populares no mercado: Javascript e Java."
        />
        <DropDown
          title="Documentos de projeto"
          description="Criar documentos, como o Documento de Requisitos ou o de Visão, sempre requer uma certa paciência, pois essa é uma etapa de registro do projeto."
        />
      </Content>
    </Container>
  );
}
