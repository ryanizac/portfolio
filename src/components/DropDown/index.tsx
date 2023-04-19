import { useState } from "react";
import { ArrowContainer, Container, Description, Title } from "./styles";
import { Column } from "../template/Column";
import UpArrowSvg from "@public/svg/up-arrow.svg";

type DropDownProps = {
  title: string;
  description: string;
};

export function DropDown(props: DropDownProps) {
  const [active, setActive] = useState(false);

  return (
    <Container onClick={() => setActive((prev) => !prev)}>
      <ArrowContainer active={active}>
        <UpArrowSvg />
      </ArrowContainer>
      <Column>
        <Title>{props.title}</Title>
        <Description active={active}>{props.description}</Description>
      </Column>
    </Container>
  );
}
