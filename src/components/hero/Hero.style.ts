import styled from "styled-components";

const CoverHeader = styled.div`
  width: 100%;
  height: 450px;
  background-image: url(./backgrounds/particles-background.webp);
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 768px) {
    height: 250px;
  }
`;

const ContainerRelativeAvatar = styled.div`
  width: 250px;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ContainerAbsoluteAvatar = styled.div`
  position: absolute;
  top: -125px;
  display: flex;
  background-color: var(--header);
  border-radius: 50%;
  padding: 5px;

  @media screen and (max-width: 768px) {
    width: 200px;
    top: -100px;
  }

  img {
    width: 100%;
    height: 100%;
    }
  }
`;

const SocialMedias = styled.div`
  max-width: 300px;
  font-size: 14px;

  a {
    @media screen and (max-width: 768px) {
      height: 40px;
      flex-basis: calc(50% - 5px);
      margin-bottom: 4px;
    }

    &:hover {
      i {
        transform: scale(1.1);
      }
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export {
  CoverHeader,
  ContainerRelativeAvatar,
  ContainerAbsoluteAvatar,
  SocialMedias,
};
