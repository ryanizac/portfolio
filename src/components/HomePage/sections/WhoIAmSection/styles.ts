import { P } from "@src/components/template/P";
import { Section } from "@src/components/template/Section";
import styled from "styled-components";

export const Container = styled(Section)``;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`;

export const Paragraph = styled(P)`
  max-width: 500px;
  margin-top: 8px;
`;
