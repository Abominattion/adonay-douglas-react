import styled from "styled-components";

interface StyledProps {
  fontSize?: string;
}

const TitlePrimary = styled.h1<StyledProps>`
  font-size: ${(props) => props.fontSize || "18px"};

  @media screen and (max-width: 728px) {
    // font-size: 20px;
  }
`;

const TitleSecondary = styled.h2<StyledProps>`
  font-size: ${(props) => props.fontSize || "18px"};

  @media screen and (max-width: 728px) {
    font-size: 16px;
  }
`;

const RoundImage = styled.img`
  border-radius: 50%;
`;

const TittleSecondary = styled.h2`
  font-size: 24px;
`;

const Link = styled.a<StyledProps>`
  display: flex;
  align-items: center;
  color: var(--color-default);
  padding: 8px 20px;
  border-radius: 8px;
  font-size: ${(props) => props.fontSize || "18px"};
  max-height: 40px;
  &:hover {
    color: var(--color-default);
  }
`;

const LinkWithBackground = styled.a<StyledProps>`
  display: flex;
  align-items: center;
  background-color: var(--link-background);
  color: var(--color-default);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: ${(props) => props.fontSize || "18px"};
  &:hover {
    color: var(--color-default);
  }
`;

const Icon = styled.i<StyledProps>`
  font-size: ${(props) => props.fontSize || "18px"};
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
