import styled from "styled-components";

const RoundImage = styled.img`
  border-radius: 50%;
`;

const TittleSecondary = styled.h2`
  font-size: 24px;
`;

const Link = styled.a`
  font-size: ${(props) => props.fontSize || 18};
`;

export { RoundImage, TittleSecondary, Link };
