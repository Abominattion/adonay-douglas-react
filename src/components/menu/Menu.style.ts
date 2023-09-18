import styled from "styled-components";

interface StyledProps {
  fontSize?: string;
  open_nav?: boolean;
}

const MenuApp = styled.div<StyledProps>`
  position: fixed;
  width: 100%;
  background-color: var(--header);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 10px 0;
  z-index: 20;
`;

const Nav = styled.div<StyledProps>`
  width: 100%;
  transition: all ease 0.5s;
  z-index: 20;

  @media screen and (max-width: 768px) {
    width: 70%;
    height: 100%;
    position: fixed;
    top: 0;
    left: ${(props) => (props.open_nav ? 0 : "-100%")};
    background-color: var(--header);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    z-index: 20;
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

  @media screen and (max-width: 768px) {
    display: flex;
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

export { MenuApp, Nav, MobileButton, Hamburger };
