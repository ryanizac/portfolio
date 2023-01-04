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
            <div>conhecer &</div>
            <div>Desenvolvimento</div>
          </H3>
          <Paragraph>
            O que me fixa no mundo é o desejo de conhecer. Desenvolvimento de
            Software foi o melhor caminho. Sou ambicioso pelas ideias que vão
            revolucionar negócios, que, por sua vez, revolucionam a vida das
            pessoas. Quero
          </Paragraph>
        </Column>
      </Content>
    </Container>
  );
}
