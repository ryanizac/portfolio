import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

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
