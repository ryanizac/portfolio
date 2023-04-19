import {
  Container,
  GroupList,
  Item,
  LinkItem,
  Title,
  TitleCopy,
} from "./styles";

export function Footer() {
  return (
    <Container>
      <GroupList>
        <Title>Navegação</Title>
        <LinkItem href="#what-i-do">O que faço</LinkItem>
        <LinkItem href="#differentials">Diferenciais</LinkItem>
        <LinkItem href="#experience">Experiencia</LinkItem>
        <LinkItem href="#technologies">Tecnologias</LinkItem>
        <LinkItem href="#articles">Artigos</LinkItem>
      </GroupList>
      <GroupList>
        <Title>Contatos</Title>
        <Item>io.ryan@outlook.com</Item>
        <Item>(84) 99453-5223</Item>
      </GroupList>
      <GroupList>
        <TitleCopy>Ryan Izac © 2023</TitleCopy>
        <LinkItem href=""></LinkItem>
        <LinkItem href="https://www.linkedin.com/in/ryanizac/">
          Linkedin
        </LinkItem>
        <LinkItem href="https://github.com/ryanizac?tab=repositories">
          Github
        </LinkItem>
        <LinkItem href="https://medium.com/@ryanizac">Medium</LinkItem>
        <LinkItem href="https://instagram.com/compryan">Instagram</LinkItem>
      </GroupList>
    </Container>
  );
}
