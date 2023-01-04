import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  column-gap: 16px;
  margin-top: 32px;

  & > svg {
    cursor: pointer;
  }

  & > svg:hover * {
    fill: white;
  }

  & > svg * {
    fill: #444444;
  }
`;
