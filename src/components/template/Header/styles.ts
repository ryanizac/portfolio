import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  padding: 50px calc(100% - 1200px);

  @media screen and (max-width: 1200px) {
    padding: 50px 20px;
  }
`;
