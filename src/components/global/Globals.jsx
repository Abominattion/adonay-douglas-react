import styled from "styled-components";

const TitlePrimary = styled.h1`
  font-size: ${(props) => props.fontsize || "18px"};
`;
const TitleSecondary = styled.h2`
  font-size: ${(props) => props.fontsize || "18px"};
`;
const RoundImage = styled.img`
  border-radius: 50%;
`;

const TittleSecondary = styled.h2`
  font-size: 24px;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  color: var(--color-default);
  padding: 8px 16px;
  border-radius: 8px;
  font-size: ${(props) => props.fontsize || "18px"};
  &:hover {
    color: var(--color-default);
  }
`;

const LinkWithBackground = styled.a`
  display: flex;
  align-items: center;
  background-color: var(--link-background);
  color: var(--color-default);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  padding: 8px 16px;
  border-radius: 8px;
  font-size: ${(props) => props.fontsize || "18px"};
  &:hover {
    color: var(--color-default);
  }
`;

const Icon = styled.i`
  font-size: ${(props) => props.fontsize || "18px"};
`;

export {
  TitlePrimary,
  TitleSecondary,
  RoundImage,
  TittleSecondary,
  Link,
  LinkWithBackground,
  Icon,
};
