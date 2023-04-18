import { Section } from "@components/template/Section";
import { Row } from "@src/components/template/Row";
import styled from "styled-components";

export const Container = styled(Section)``;

export const ArticlesArea = styled(Row)`
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 64px;
`;
