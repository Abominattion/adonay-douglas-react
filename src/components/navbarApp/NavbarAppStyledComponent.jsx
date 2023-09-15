import styled from "styled-components";

const NavBar = styled.div`
  position: fixed;
  width: 100%;
  background-color: var(--header);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 10px 0;
  z-index: 10;
`;

const Nav = styled.div`
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
  align-itens: center;
  gap: 10px;

  @media screen and (max-width: 728px) {
    flex-direction: column;
    padding: 20px;
  }

  button {
    @media screen and (max-width: 728px) {
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
`;

const NavLink = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;

  color: var(--color-default);
  padding: 8px 20px;
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
`;

const MobileButton = styled.button`
  display: none;
  justify-content: space-between;
  align-itens: center;
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
`;

const Hamburger = styled.span`
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
