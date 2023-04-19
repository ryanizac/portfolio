import {
  Container,
  GroupList,
  Item,
  LinkItem,
  Title,
  TitleCopy,
} from "./styles";

type Route = {
  path: string;
  text: string;
};

type FooterProps = {
  navigation: Route[];
  contacts: string[];
  external: Route[];
};

export function Footer(props: FooterProps) {
  return (
    <Container>
      <GroupList>
        <Title>Navegação</Title>
        {props.navigation.map((item, index) => (
          <LinkItem key={item.path + index} href={"#" + item.path}>
            {item.text}
          </LinkItem>
        ))}
      </GroupList>
      <GroupList>
        <Title>Contatos</Title>
        {props.contacts.map((item, index) => (
          <Item key={item + index}>{item}</Item>
        ))}
      </GroupList>
      <GroupList>
        <TitleCopy>Ryan Izac © 2023</TitleCopy>
        {props.external.map((item, index) => (
          <LinkItem key={item.path + index} href={item.path}>
            {item.text}
          </LinkItem>
        ))}
      </GroupList>
    </Container>
  );
}
