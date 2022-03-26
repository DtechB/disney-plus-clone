import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <div className="Login">
      <Box>
        <FirstLogo src="/images/cta-logo-one.svg" alt="" />
        <SignUp>GET ALL THERE</SignUp>
        <SubTitle>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </SubTitle>
        <SecondLogo src="/images/cta-logo-two.png" alt="" />
      </Box>
    </div>
  );
}

export default Login;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  width: 100%;
  padding: 80px 40px;
  font-size: 18px;
  font-weight: bold;
`;

const FirstLogo = styled.img`
  width: 100%;
  margin-bottom: 15px;
`;

const SignUp = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 99, 229);
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 10px;

  &:hover {
    background-color: #0483ee;
  }
`;

const SubTitle = styled.p`
  width: 100%;
  font-size: 13px;
  text-align: center;
  font-weight: 400;
  margin-bottom: 15px;
`;

const SecondLogo = styled.img`
  width: 100%;
`;
