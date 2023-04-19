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
      <Footer
        navigation={[
          { path: "what-i-do", text: "O que faço" },
          { path: "differentials", text: "Diferenciais" },
          { path: "experience", text: "Experiencia" },
          { path: "technologies", text: "Tecnologias" },
          { path: "articles", text: "Artigos" },
        ]}
        contacts={["io.ryan@outlook.com", "(84) 99453-5223"]}
        external={[
          { path: "https://www.linkedin.com/in/ryanizac/", text: "Linkedin" },
          {
            path: "https://github.com/ryanizac?tab=repositories",
            text: "Github",
          },
          { path: "https://medium.com/@ryanizac", text: "Medium" },
          { path: "https://instagram.com/compryan", text: "Instagram" },
        ]}
      />
    </Container>
  );
}
