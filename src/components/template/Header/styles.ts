import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 0 calc(100% - 1200px);
  height: 100px;

  @media screen and (max-width: 1200px) {
    padding: 0 20px;
  }
`;
