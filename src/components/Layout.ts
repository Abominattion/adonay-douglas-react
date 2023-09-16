import styled from "styled-components";
import { CSSProperties } from "react";

interface StyledProps {
  justifycontent?: CSSProperties["justifyContent"];
  alignitems?: CSSProperties["alignItems"];
  flexdirection?: CSSProperties["flexDirection"];
  mobile_flex_box?: CSSProperties["flexDirection"];
}

const Box = styled.div`
  display: block;
`;

const Container = styled.div`
  display: block;
  max-width: 90%;
  margin: 0 auto;
`;

const ShadedContainer = styled.div`
  width: 100%;
  min-height: 150px;
  background-color: var(--header);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const Section = styled.div`
  padding: 120px 0;
  min-height: 100vh;
`;

const DisplayFlex = styled.div<StyledProps>`
  display: flex;
  justify-content: ${(props) => props.justifycontent || "start"};
  align-items: ${(props) => props.alignitems || "normal"};
  flex-direction: ${(props) => props.flexdirection || "row"};
  gap: 5px;

  @media screen and (max-width: 728px) {
    flex-direction: ${(props) => props.mobile_flex_box || "row"};
    flex-wrap: wrap;
  }
`;

export { Box, Container, ShadedContainer, Section, DisplayFlex };
