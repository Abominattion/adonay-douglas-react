import styled from "styled-components";

// Images
import { headerCover } from "../../helpers/ImportImages";

const CoverHeader = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${headerCover});
  background-size: cover;
  background-position: center;
`;

const HeaderBody = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${headerCover});
  background-size: cover;
  background-position: cente;
`;

export { CoverHeader, HeaderBody };
