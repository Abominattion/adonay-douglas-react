import styled from "styled-components";

interface StyledProps {
  fontsize?: string;
  open_nav?: boolean;
}

const NavBar = styled.div<StyledProps>`
  position: fixed;
  width: 100%;
  background-color: var(--header);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 10px 0;
  z-index: 10;

  @media screen and (max-width: 400px) {
    img {
      width: 40px;
    }
  }
`;

const Nav = styled.div<StyledProps>`
  width: 100%;
  transition: all ease 0.5s;

  @media screen and (max-width: 728px) {
    width: 70%;
    height: 100%;
    position: fixed;
    top: 0;
    left: ${(props) => (props.open_nav ? 0 : "-70%")};
    background-color: var(--header);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    z-index: 10;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 728px) {
    flex-direction: column;
    padding: 20px;
  }

  button {
    @media screen and (max-width: 728px) {
      width: 100%;
      font-size: 18px;
      margin: 10px 0;
      padding: 20px;
      background-color: var(--link-background);
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      max-height: 60px;
    }

    i {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 400px) {
    gap: 0px;
    padding: 10px;
  }
`;

const NavLink = styled.button<StyledProps>`
  display: flex;
  align-items: center;
  background-color: transparent;

  color: var(--color-default);
  padding: 8px 10px;
  border-radius: 8px;
  font-size: ${(props) => props.fontsize || "18px"};
  font-weight: 600;
  max-height: 40px;
  cursor: pointer;
  border: none;
  transition: all ease 0.5s;

  &:hover {
    background-color: var(--link-background);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 8px;
  }

  @media screen and (max-width: 400px) {
    height: 40px;
  }
`;

const MobileButton = styled.button<StyledProps>`
  display: none;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-primary);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  color: var(--color-default);
  border: none;
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all ease 0.5s;

  @media screen and (max-width: 728px) {
    display: flex;
  }

  @media screen and (max-width: 400px) {
    height: 40px;
  }
`;

const Hamburger = styled.span<StyledProps>`
  border-top: 2px solid;
  width: 20px;
  border-top-color: ${(props) => (props.open_nav ? "transparent" : "")};

  &:after {
    content: "";
    display: block;
    width: 20px;
    height: 2px;
    background: currentColor;
    margin-top: 5px;
    transition: 0.3s;
    position: relative;

    transform: ${(props) => (props.open_nav ? "rotate(-135deg)" : "")};
    top: ${(props) => (props.open_nav ? "-7px" : "")};
  }

  &:before {
    content: "";
    display: block;
    width: 20px;
    height: 2px;
    background: currentColor;
    margin-top: 5px;
    transition: 0.3s;
    position: relative;

    transform: ${(props) => (props.open_nav ? "rotate(135deg)" : "")};
  }
`;

export { NavBar, Nav, NavContainer, NavLink, MobileButton, Hamburger };
