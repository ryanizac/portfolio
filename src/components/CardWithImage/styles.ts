import styled from "styled-components";
import { P } from "../template/P";
import { H3 } from "../template/H";
import NextImage from "next/image";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 40%;
  max-width: calc(50% - 16px);
  overflow: hidden;

  a {
    text-decoration: none;
    color: white;
  }
`;

export const Image = styled(NextImage)`
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 32px;
`;

export const Title = styled(H3)`
  font-size: 28px;
  margin-bottom: 8px;
`;

export const Subtitle = styled(P)``;
