import styled from "styled-components";

// Images
import { headerCover } from "../../helpers/ImportImages";

const CoverHeader = styled.div`
  width: 100%;
  height: 450px;
  background-image: url(${headerCover});
  background-size: cover;
  background-position: center;
`;

const ContainerRelative = styled.div`
  width: 100%;
  position: relative;
`;

const ContainerRelativeAvatar = styled.div`
  width: 250px;
  position: relative;

  @media screen and (max-width: 728px) {
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

  @media screen and (max-width: 728px) {
    width: 200px;
    top: -100px;
  }

  img {
    width: 100%;
    height: 100%;
    }
  }
`;

const HeroBody = styled.div`
  padding: 10px 0;

  @media screen and (max-width: 728px) {
    padding: 80px 0px 30px 0px;
  }
`;

const UserDescription = styled.div`
  padding: 10px 0;

  @media screen and (max-width: 728px) {
    text-align: center;
    padding: 20px 0;
  }
`;

const SocialMedias = styled.div`
  max-width: 300px;

  a {
    @media screen and (max-width: 728px) {
      flex-basis: calc(50% - 5px);
    }

    &:hover {
      i {
        transform: scale(1.1);
      }
    }
  }

  @media screen and (max-width: 728px) {
    max-width: 100%;
  }
`;

export {
  CoverHeader,
  ContainerRelative,
  ContainerRelativeAvatar,
  ContainerAbsoluteAvatar,
  HeroBody,
  UserDescription,
  SocialMedias,
};
