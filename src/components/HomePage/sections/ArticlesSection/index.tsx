import { SectionDescription } from "@src/components/template/SectionDescription";
import { ArticlesArea, Container } from "./styles";
import { CardWithImage } from "@src/components/CardWithImage";

import scrumImg from "@public/img/articles/scrum-a-arte-de-fazer-o-trabalho-no-tempo-necessário.png";
import libImg from "@public/img/articles/lib-de-rotas-react-web-e-native.png";
import principleImg from "@public/img/articles/principio-da-responsabilidade-unica-solid-1.png";

export function ArticlesSection() {
  return (
    <Container>
      <SectionDescription
        title="Artigos"
        subtitle="Veja meus artigos publicados no medium."
      />
      <ArticlesArea>
        <CardWithImage
          title="Scrum: a arte de fazer o trabalho no tempo necessário."
          subtitle="As críticas de um junior às ideias providas do livro 2 do Scrum."
          src={scrumImg}
          href="https://medium.com/@ryanizac/scrum-a-arte-de-fazer-o-trabalho-no-tempo-necess%C3%A1rio-8975a6d1d55c"
        />
        <CardWithImage
          title="Lib de rotas React (web e native)."
          subtitle="Desenvolvimento de bibliotecas e rotas para o React."
          src={libImg}
          href="https://medium.com/@ryanizac/lib-de-rotas-react-web-e-native-d2629404caa4"
        />
        <CardWithImage
          title="Princípio da Responsabilidade Única — SOLID. #1"
          subtitle="Entendendo o SRP na prática seguida pela discussão da teoria."
          src={principleImg}
          href="https://medium.com/@ryanizac/princ%C3%ADpio-da-responsabilidade-%C3%BAnica-solid-1-fad4d517074c"
        />
      </ArticlesArea>
    </Container>
  );
}
