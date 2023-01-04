import { Container } from "./styles";
import {
  Github,
  Instagram,
  Linkedin,
  Medium,
  Youtube,
} from "./socialSvgImports";

type SocialIconsProps = {};

export function SocialIcons(props: SocialIconsProps) {
  return (
    <Container>
      <Linkedin width={32} height={32} />
      <Github width={32} height={32} />
      <Medium width={32} height={32} />
      <Youtube width={32} height={32} />
      <Instagram width={32} height={32} />
    </Container>
  );
}
