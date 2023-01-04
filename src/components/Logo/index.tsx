import { Container, Text } from "./styles";
import CodeSVG from "@public/svg/code.svg";
import { Link } from "../Link";

export function Logo() {
  return (
    <Link href="/" legacyBehavior>
      <Container>
        <CodeSVG width={32} height={32} />
        <Text>Ryan Izac</Text>
      </Container>
    </Link>
  );
}
