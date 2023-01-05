import { SectionDescription } from "@src/components/template/SectionDescription";
import { Container, Content, ExperienceArea, Image, ImageArea } from "./styles";
import { RowCard } from "@src/components/RowCard";

import ufersaImage from "@public/img/graduation/ufersa.png";
import ifrnImage from "@public/img/graduation/ifrn.png";

type GraduationsSectionProps = {};

export function GraduationsSection(props: GraduationsSectionProps) {
  return (
    <Container>
      <SectionDescription
        title="Formações"
        subtitle="Clique para saber mais sobre cada uma"
      />
      <Content>
        <ExperienceArea>
          <RowCard
            title="Tecnologia da Informação"
            subtitle="Bacharelado, UFERSA"
          />
          <RowCard title="Informática" subtitle="Técnico, IFRN" />
        </ExperienceArea>
        <ImageArea>
          <Image src={ufersaImage} alt="ufersa" />
          <Image src={ifrnImage} alt="ifrn" />
        </ImageArea>
      </Content>
    </Container>
  );
}
