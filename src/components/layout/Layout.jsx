import styled from "styled-components";

const Container = styled.div`
  display: block;
  max-width: 90%;
  margin: 0 auto;
`;

const DisplayFlex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "start"};
  align-items: ${(props) => props.alignItems || "normal"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  gap: 5px;
`;

export { Container, DisplayFlex };
