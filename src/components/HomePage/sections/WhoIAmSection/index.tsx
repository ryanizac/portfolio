import { Container, Content, Paragraph } from "./styles";
import { Column } from "@src/components/template/Column";
import { H3 } from "@src/components/template/H";
import { SectionDescription } from "@src/components/template/SectionDescription";
import NextImage from "next/image";
import me1 from "@public/img/me1.png";

export function WhoIAmSection() {
  return (
    <Container>
      <SectionDescription
        title="Quem sou"
        subtitle="O que penso, o que gosto, minhas ideias"
      />
      <Content>
        <NextImage src={me1} alt="me1" width={400} height={400} />
        <Column>
          <H3>
            <div>Ryan &</div>
            <div>Negócios &</div>
            <div>Tecnologia</div>
          </H3>
          <Paragraph>
            Sou apaixonado por tecnologia e negócios. Gosto de pensar nas
            melhores ideias que vão agregar na vida das pessoas.
          </Paragraph>
        </Column>
      </Content>
    </Container>
  );
}
