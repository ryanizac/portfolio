import styled from "styled-components";
import NextLink from "next/link";

export const Container = styled.footer`
  display: flex;
  padding: 50px calc(100% - 1200px);
  background-color: #0f0f0f;
  gap: 128px;

  article:last-child {
    margin-left: auto;
    align-items: flex-end;
  }

  @media screen and (max-width: 1200px) {
    padding: 50px 20px;
  }
`;

export const GroupList = styled.article`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const LinkItem = styled(NextLink)`
  font-size: 16px;
  font-weight: 500;
  color: white;
  text-decoration: none;
`;

export const Item = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const TitleCopy = styled(Title)`
  font-weight: 400;
  font-size: 16px;
`;
