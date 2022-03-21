import React from "react";
import styled from "styled-components";
import colors from "../config/colors";
import Avatar from "./Avatar";
import NavMenu from "./NavMenu";

function Header() {
  return (
    <div className="Header">
      <Nav>
        <Logo src="/images/logo.svg" />
        <NavMenu />
        <Avatar src="http://picsum.photos/50" />
      </Nav>
    </div>
  );
}

export default Header;

const Nav = styled.div`
  height: 70px;
  background: ${colors.dark};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;

const Logo = styled.img`
  width: 80px;
`;
