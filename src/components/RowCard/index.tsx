import { Container, Subtitle, Title } from "./styles";

type RowCardProps = {
  title: string;
  subtitle: string;
};

export function RowCard(props: RowCardProps) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </Container>
  );
}
