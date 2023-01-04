import { Content } from "@src/components/template/Content";
import { Header } from "@components/template/Header";
import { Nav } from "@components/Nav";
import { Container } from "../template/Container";
import { Logo } from "../Logo";
import { Column } from "../template/Column";
import { H1 } from "../template/H";
import { P } from "../template/P";
import { FirstSection } from "../template/FirstSection";
import { SocialIcons } from "./components/SocialIcons";

type HomePageProps = {};

export function HomePage(props: HomePageProps) {
  return (
    <Container>
      <Content>
        <FirstSection>
          <Header>
            <Nav>
              <Logo />
            </Nav>
          </Header>
          <Column>
            <H1>
              Olá! Me chamo Ryan; construo sistemas para as pessoas por trás dos
              requisitos. Tecnologia é o presente.
            </H1>
            <P>
              Olá, me chamo Ryan. Eu desenvolvo software; gosto de dizer que
              faço isso para as pessoas por trás dos requisitos. Atualmente
              estudo Tecnologia da Informação na Universidade Federal do RN e
              cursei o Técnico em Informática no Instituto Federal do RN.
            </P>
            <SocialIcons />
          </Column>
        </FirstSection>
      </Content>
    </Container>
  );
}
