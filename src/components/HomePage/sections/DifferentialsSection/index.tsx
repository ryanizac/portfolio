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
          description="Metodologias ágeis Metodologias ágeis Metodologias ágeis Metodologias ágeis"
        />
        <DropDown
          title="Protótipo de interfaces"
          description="Metodologias ágeis Metodologias ágeis Metodologias ágeis Metodologias ágeis"
        />
        <DropDown
          title="Código limpo"
          description="Metodologias ágeis Metodologias ágeis Metodologias ágeis Metodologias ágeis"
        />
        <DropDown
          title="Tecnologias populares"
          description="Metodologias ágeis Metodologias ágeis Metodologias ágeis Metodologias ágeis"
        />
        <DropDown
          title="Documentos de projeto"
          description="Metodologias ágeis Metodologias ágeis Metodologias ágeis Metodologias ágeis"
        />
      </Content>
    </Container>
  );
}
