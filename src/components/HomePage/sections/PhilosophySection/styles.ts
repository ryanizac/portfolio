import { Section } from "@src/components/template/Section";
import styled from "styled-components";

export const Container = styled(Section)`
  min-height: auto;
  row-gap: 64px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  column-gap: 32px;
`;
