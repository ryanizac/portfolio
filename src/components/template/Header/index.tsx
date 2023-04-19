import { Container } from "./styles";
import { Nav } from "@components/Nav";
import { Logo } from "@components/Logo";

export function Header() {
  return (
    <Container>
      <Nav>
        <Logo />
      </Nav>
    </Container>
  );
}
