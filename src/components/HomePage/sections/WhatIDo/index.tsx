import { Card } from "@src/components/Card";
import { Container, Content } from "./styles";
import { SectionDescription } from "@src/components/template/SectionDescription";
import { ScreenSvg, PaintSvg, CodeSvg } from "@src/svg/what-i-do";

export function WhatIDo() {
  return (
    <Container>
      <SectionDescription
        title="O que eu faço"
        subtitle="Serviços, produtos e soluções"
      />
      <Content>
        <Card
          Icon={ScreenSvg}
          title="Web | Mobile | Desktop"
          subtitle="Plataformas web e mobile nativas 100% funcionais programadas com a linguagem JavaScript."
        />
        <Card
          Icon={PaintSvg}
          title="UX"
          subtitle="Plataformas web e mobile nativas 100% funcionais programadas com a linguagem JavaScript."
        />
        <Card
          Icon={CodeSvg}
          title="Outras aplicações"
          subtitle="Plataformas web e mobile nativas 100% funcionais programadas com a linguagem JavaScript."
        />
      </Content>
    </Container>
  );
}
