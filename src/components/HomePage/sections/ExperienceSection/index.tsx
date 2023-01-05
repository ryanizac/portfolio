import { SectionDescription } from "@src/components/template/SectionDescription";
import { Container, Content, ExperienceArea, Image, ImageArea } from "./styles";
import { RowCard } from "@src/components/RowCard";

import pechinchouImage from "@public/img/experience/pechinchou.png";
import siaspImage from "@public/img/experience/siasp.png";
import amjusImage from "@public/img/experience/amjus.png";

type ExperienceSectionProps = {};

export function ExperienceSection(props: ExperienceSectionProps) {
  return (
    <Container>
      <SectionDescription
        title="EXPERIÊNCIA"
        subtitle="Clique para saber mais sobre cada uma"
      />
      <Content>
        <ExperienceArea>
          <RowCard title="Pechinchou" subtitle="Desenvolvedor Fullstack" />
          <RowCard title="SIASP" subtitle="Estágio em Desenvolvimento" />
          <RowCard title="AMJUS" subtitle="Estágio em Educação Tecnológica" />
        </ExperienceArea>
        <ImageArea>
          <Image src={pechinchouImage} alt="pechinchou" />
          <Image src={siaspImage} alt="siasp" />
          <Image src={amjusImage} alt="amjus" />
        </ImageArea>
      </Content>
    </Container>
  );
}
