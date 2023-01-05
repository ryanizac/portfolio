import { Section } from "@src/components/template/Section";
import styled from "styled-components";

export const Container = styled(Section)`
  min-height: auto;
  row-gap: 64px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
