import { Container } from "./styles";
import {
  Github,
  Instagram,
  Linkedin,
  Medium,
  Youtube,
} from "./socialSvgImports";
import NextLink from "next/link";

type SocialIconsProps = {};

export function SocialIcons(props: SocialIconsProps) {
  return (
    <Container>
      <NextLink href="https://www.linkedin.com/in/ryanizac/">
        <Linkedin width={32} height={32} />
      </NextLink>
      <NextLink href="https://github.com/ryanizac">
        <Github width={32} height={32} />
      </NextLink>
      <NextLink href="https://medium.com/@ryanizac">
        <Medium width={32} height={32} />
      </NextLink>
      <Youtube width={32} height={32} />
      <NextLink href="https://instagram.com/compryan">
        <Instagram width={32} height={32} />
      </NextLink>
    </Container>
  );
}
