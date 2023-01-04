import { FC, SVGProps } from "react";
import { Container, Subtitle, Title } from "./styles";

type CardProps = {
  title: string;
  subtitle: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
};

export function Card({ title, subtitle, Icon }: CardProps) {
  return (
    <Container>
      <Icon />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
