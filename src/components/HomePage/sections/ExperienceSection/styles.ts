import styled from "styled-components";
import { Column } from "@src/components/template/Column";
import { Row } from "@src/components/template/Row";
import { Section } from "@src/components/template/Section";
import NextImage from "next/image";

export const Container = styled(Section)``;

export const Content = styled(Row)`
  align-items: center;
  justify-content: space-between;
`;

export const ExperienceArea = styled(Column)`
  row-gap: 32px;
`;

export const ImageArea = styled(Column)`
  justify-content: space-between;
  min-height: 100%;
  row-gap: 64px;
`;

export const Image = styled(NextImage).attrs({
  height: 64,
})``;
