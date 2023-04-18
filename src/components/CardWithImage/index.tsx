import { Container, Image, Subtitle, Title } from "./styles";
import NextLink from "next/link";

type CardWithImageProps = {
  title: string;
  subtitle: string;
  src: string;
  href?: string;
};

export function CardWithImage(props: CardWithImageProps) {
  const Content = (
    <>
      <Image src={props.src} alt={props.title} />
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </>
  );

  return (
    <Container>
      {props.href ? <NextLink href={props.href}>{Content}</NextLink> : Content}
    </Container>
  );
}
