import { Container, Text } from "./styles";
import NextImage from "next/image";
import codeSVG from "@public/svg/code.svg";
import { Link } from "../Link";

export function Logo() {
  return (
    <Link href="/" legacyBehavior>
      <Container>
        <NextImage src={codeSVG} alt="Code svg" width={32} height={32} />
        <Text>Ryan Izac</Text>
      </Container>
    </Link>
  );
}
