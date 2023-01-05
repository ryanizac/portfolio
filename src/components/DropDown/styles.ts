import styled, { css } from "styled-components";
import UpArrowSvg from "@public/svg/up-arrow.svg";
import { H4 } from "../template/H";
import { P } from "../template/P";

type ActiveProp = {
  active?: any;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 32px;
  background-color: #141414;
  overflow: hidden;
  cursor: pointer;
`;

export const Arrow = styled(UpArrowSvg)<ActiveProp>`
  transition: 0.5s;
  transition-delay: 0.3s;
  transform: rotate(${({ active }) => (!!active ? 180 : 0)}deg);
`;

export const Title = styled(H4)``;

const activeDescriptionCss = css`
  height: 100%;
  opacity: 1;
`;

export const Description = styled(P)<ActiveProp>`
  width: 100%;
  height: 0;
  opacity: 0;
  transition: 0.3s;
  ${({ active }) => (active ? activeDescriptionCss : "")}
`;
