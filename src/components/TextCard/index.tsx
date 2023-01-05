import { Container, Content, Title } from "./styles";

type TextCardProps = {
  title: string;
  children: string;
};

export function TextCard(props: TextCardProps) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Content>{props.children}</Content>
    </Container>
  );
}
