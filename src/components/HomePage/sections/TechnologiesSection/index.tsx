import { SectionDescription } from "@src/components/template/SectionDescription";
import {
  Line,
  Container,
  Image,
  Paragraph,
  TechnologyImageArea,
} from "./styles";

import typescriptImage from "@public/img/technologies/typescript.png";
import javascriptImage from "@public/img/technologies/javascript.png";
import nodejsImage from "@public/img/technologies/nodejs.png";
import reactjsImage from "@public/img/technologies/reactjs.png";
import expressjsImage from "@public/img/technologies/expressjs.png";
import nextjsImage from "@public/img/technologies/nextjs.png";

import babeljsImage from "@public/img/technologies/p2/babeljs.png";
import esbuildImage from "@public/img/technologies/p2/esbuild.png";
import sassImage from "@public/img/technologies/p2/sass.png";
import vitejsImage from "@public/img/technologies/p2/vitejs.png";
import vitestImage from "@public/img/technologies/p2/vitest.png";
import webpackImage from "@public/img/technologies/p2/webpack.png";

type TechnologiesSectionProps = {};

export function TechnologiesSection(props: TechnologiesSectionProps) {
  return (
    <Container>
      <SectionDescription
        title="Tecnologias"
        subtitle="Clique para saber mais sobre cada uma"
      />
      <Paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry{"'"}s standard dummy text
        ever since the 1500s
      </Paragraph>
      <TechnologyImageArea>
        <Image src={typescriptImage} alt="typescript" />
        <Image src={javascriptImage} alt="javascript" />
        <Image src={nodejsImage} alt="nodejs" />
        <Image src={reactjsImage} alt="reactjs" />
        <Image src={expressjsImage} alt="expressjs" />
        <Image src={nextjsImage} alt="nextjs" />
        <Image src={babeljsImage} alt="babeljs" />
        <Image src={esbuildImage} alt="esbuild" />
        <Image src={sassImage} alt="sass" />
        <Image src={vitejsImage} alt="vitejs" />
        <Image src={vitestImage} alt="vitest" />
        <Image src={webpackImage} alt="webpack" />
      </TechnologyImageArea>
    </Container>
  );
}
