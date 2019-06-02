import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  background-color: black;
  height: 150px;
`

const FooterText = styled.p`
  color: #fff;
  text-align: center;
  padding: 3%;
`

const Footer = () => (
  <FooterContainer>
    <FooterText>
      <p>
        For all LatinX community. If you have questions or conerns, reach out
        <a href="/">here</a>
      </p>
    </FooterText>
  </FooterContainer>
)

export default Footer
