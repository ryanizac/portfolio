import { Container, Image, Name } from "./styles";
import me from "@public/img/me1.png";

export function ProfileCard() {
  return (
    <Container>
      <Image src={me} alt="ryan" />
      <Name>Ryan Izac</Name>
    </Container>
  );
}
