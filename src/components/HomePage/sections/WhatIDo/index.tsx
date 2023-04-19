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
          subtitle="Aplicativos, Programas e Sistemas Web funcionais para todas as plataformas."
        />
        <Card
          Icon={PaintSvg}
          title="UX"
          subtitle="Desenvolvimento de protótipos para pré-visualização das interfaces de sistemas."
        />
        <Card
          Icon={CodeSvg}
          title="Outras aplicações"
          subtitle="Desenvolvimento e automação de Bots.  Integração de circuitos eletrônicos com sistemas online."
        />
      </Content>
    </Container>
  );
}
