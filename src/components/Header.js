import React from "react";
import styled from "styled-components";
import colors from "../config/colors";
import Avatar from "./Avatar";
import NavMenu from "./NavMenu";
import { Justify } from "react-bootstrap-icons";
import AppButton from "./AppButton";

function Header({ isLogin }) {
  return (
    <div className="Header">
      <Nav>
        <Logo src="/images/logo.svg" />
        {isLogin && (
          <>
            <NavMenu />
            <Avatar src="http://picsum.photos/50" />
            <Justify
              color="white"
              size={30}
              cursor="pointer"
              className="d-lg-none"
            />{" "}
          </>
        )}
        {!isLogin && (
          <>
            <AppButton
              title="LOGIN"
              backgroundColor="black"
              color="white"
              border="2px solid white"
              padding="5px 25px"
            />
          </>
        )}
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
