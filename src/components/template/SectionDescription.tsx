import styled from "styled-components";
import { H1 } from "./H";

const Container = styled.article``;

const SectionTitle = styled(H1)`
  margin-bottom: 8px;
`;

const SectionSubtitle = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

type SectionDescriptionProps = {
  title: string;
  subtitle?: string;
};

export function SectionDescription(props: SectionDescriptionProps) {
  return (
    <Container>
      <SectionTitle>{props.title}</SectionTitle>
      {props.subtitle && <SectionSubtitle>{props.subtitle}</SectionSubtitle>}
    </Container>
  );
}
