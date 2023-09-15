import styled from "styled-components";

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
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const DisplayFlex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifycontent || "start"};
  align-items: ${(props) => props.alignitems || "normal"};
  flex-direction: ${(props) => props.flexdirection || "row"};
  gap: 5px;

  @media screen and (max-width: 728px) {
    flex-direction: ${(props) => props.mobile_flex_box || "row"};
  }
`;

export { Box, Container, ShadedContainer, DisplayFlex };
