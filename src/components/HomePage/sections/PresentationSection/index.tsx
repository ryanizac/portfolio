import { Container } from "./styles";
import { Column } from "@components/template/Column";
import { H1 } from "@components/template/H";
import { P } from "@components/template/P";
import { SocialIcons } from "../../components/SocialIcons";
import { ProfileCard } from "@components/ProfileCard";

export function PresentationSection() {
  return (
    <Container>
      <Column className="left">
        <H1>
          Olá! Me chamo Ryan; construo <span>sistemas</span> para as{" "}
          <span>pessoas</span> por trás dos requisitos.
        </H1>
        <ProfileCard />
        <P>
          O desenvolvimento de Software foi o caminho que eu escolhi para
          agregar boas ideias aos negócios e a vida das pessoas.
        </P>
      </Column>
      <SocialIcons />
    </Container>
  );
}
