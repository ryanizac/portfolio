import styled from "styled-components";
import { H3 } from "../template/H";
import { P } from "../template/P";

export const Container = styled.article`
  cursor: default;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 64px 32px;
  background-color: #0f0f0f;
  border-radius: 16px;
`;

export const Title = styled(H3)`
  font-size: 24px;
`;

export const Subtitle = styled(P)`
  font-size: 16px;
`;
