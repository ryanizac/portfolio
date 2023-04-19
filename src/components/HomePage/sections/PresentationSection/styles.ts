import { FirstSection } from "@src/components/template/FirstSection";
import styled from "styled-components";

export const Container = styled(FirstSection)`
  flex-direction: row;
  gap: 180px;
  align-items: flex-end;
  padding-bottom: 100px;

  .left {
    gap: 16px;
  }

  h1 span {
    color: #0683dd;
  }

  p {
    padding: 8px 0;
    padding-left: 32px;
    border-left: 3px solid white;
  }
`;
