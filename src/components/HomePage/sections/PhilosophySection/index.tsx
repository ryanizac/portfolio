import { TextCard } from "@src/components/TextCard";
import { Container, Content } from "./styles";
import { H3 } from "@src/components/template/H";

type PhilosophySectionProps = {};

export function PhilosophySection(props: PhilosophySectionProps) {
  return (
    <Container>
      <H3>Minha filosofia para projetos de software</H3>
      <Content>
        <TextCard title="I. Há motivação">
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more less normal distribution.
        </TextCard>
        <TextCard title="II. O Design molda">
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more less normal distribution.
        </TextCard>
        <TextCard title="III. Tecnologia útil">
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more less normal distribution.
        </TextCard>
      </Content>
    </Container>
  );
}
