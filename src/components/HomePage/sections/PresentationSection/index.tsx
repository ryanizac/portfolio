import { Container } from "./styles";
import { Column } from "@components/template/Column";
import { H1 } from "@components/template/H";
import { P } from "@components/template/P";

import { SocialIcons } from "../../components/SocialIcons";

export function PresentationSection() {
  return (
    <Container>
      <Column>
        <H1>
          Olá! Me chamo Ryan; construo sistemas para as pessoas por trás dos
          requisitos.
        </H1>
        <P>
          Olá, me chamo Ryan. Eu desenvolvo software; gosto de dizer que faço
          isso para as pessoas por trás dos requisitos. Atualmente estudo
          Tecnologia da Informação na Universidade Federal do RN e cursei o
          Técnico em Informática no Instituto Federal do RN.
        </P>
        <SocialIcons />
      </Column>
    </Container>
  );
}
