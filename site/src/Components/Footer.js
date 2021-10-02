/* eslint-disable no-unused-vars */

import styled from "styled-components";
import React from "react";
import { Container } from "react-bootstrap";

const ImgStyled = styled.img`
  margin: 46px;
`;

export const Footer = () => (
  <Container fluid style={{ backgroundColor: "#212529", color: "#ffff" }}>
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "50px",
        width: "200px",
      }}
    >
      <ImgStyled
        src="/instagram.png"
        width="100px"
        height="100px"
        alt="instagram"
      />
      <ImgStyled src="/twitter.png" width="100px" height="100px" alt="" />
      <ImgStyled
        src="/linkedin.png"
        width="100px"
        height="100px"
        alt="linkedin"
      />
      <ImgStyled
        src="/facebook.png"
        width="100px"
        height="100px"
        alt="instagram"
      />
    </Container>
  </Container>
);

export default Footer;
