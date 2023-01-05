import styled from "styled-components";
import { P } from "@src/components/template/P";
import { Row } from "@src/components/template/Row";
import { Section } from "@src/components/template/Section";
import NextImage from "next/image";

export const Container = styled(Section)``;

export const Paragraph = styled(P)`
  max-width: 500px;
`;

export const TechnologyImageArea = styled(Row)`
  flex-wrap: wrap;
  gap: 32px;
`;

export const Image = styled(NextImage)``;
