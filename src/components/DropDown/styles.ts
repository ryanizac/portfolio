import styled, { css, keyframes } from "styled-components";
import { H4 } from "../template/H";
import { P } from "../template/P";

type ActiveProp = {
  active?: boolean;
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

export const ArrowContainer = styled.div<ActiveProp>`
  transition: 0.5s;
  transform: rotate(${({ active }) => (!!active ? 180 : 0)}deg);
`;

export const Title = styled(H4)``;

const activeDescriptionCss = css`
  max-height: 150px;
  opacity: 1;
`;

export const Description = styled(P)<ActiveProp>`
  max-height: 0;
  opacity: 0;
  transition: 0.5s;
  ${({ active }) => (active ? activeDescriptionCss : "")}
`;
