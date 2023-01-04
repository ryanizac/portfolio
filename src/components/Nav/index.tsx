import { ReactNode } from "react";
import { NavContainer, NavContent } from "./styles";

type NavProps = {
  children: ReactNode;
};

export function Nav(props: NavProps) {
  return (
    <NavContainer>
      <NavContent>{props.children}</NavContent>
    </NavContainer>
  );
}
