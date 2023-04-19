import { Content } from "@src/components/template/Content";
import { Container } from "../template/Container";
import { WhoIAmSection } from "./sections/WhoIAmSection";
import { WhatIDo } from "./sections/WhatIDo";
import { DifferentialsSection } from "./sections/DifferentialsSection";
import { PhilosophySection } from "./sections/PhilosophySection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { GraduationsSection } from "./sections/GraduationsSection";
import { TechnologiesSection } from "./sections/TechnologiesSection";
import { PresentationSection } from "./sections/PresentationSection";
import { ArticlesSection } from "./sections/ArticlesSection";
import { Footer } from "@components/template/Footer";

type HomePageProps = {};

export function HomePage(props: HomePageProps) {
  return (
    <Container>
      <Content>
        <PresentationSection />
        <WhoIAmSection />
        <WhatIDo />
        <DifferentialsSection />
        <PhilosophySection />
        <ExperienceSection />
        <GraduationsSection />
        <TechnologiesSection />
        <ArticlesSection />
      </Content>
      <Footer />
    </Container>
  );
}
