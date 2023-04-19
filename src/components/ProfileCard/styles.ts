import styled from "styled-components";
import NextImage from "next/image";

export const Container = styled.article`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Image = styled(NextImage)`
  height: 48px;
  width: 48px;
  border-radius: 30px;
`;

export const Name = styled.h4`
  font-size: 20px;
  font-weight: 600;
`;
