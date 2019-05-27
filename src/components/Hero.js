import React from "react"
import styled from "styled-components"
import Button from "./Button/Button"

const Banner = styled.div`
  min-height: 90vh;
  margin: 0 5% 5% 5%;
  background-color: #f0d5d4;
  align-items: center;
  opacity: 1;
`

const SiteInfo = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  position: relative;
  padding-top: 20%;
`

const Heading = styled.h2`
  font-size: 45px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const Desc = styled.p`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 10%;
`

const Hero = () => (
  <Banner>
    <SiteInfo>
      <Heading>Women Who Co-work</Heading>
      <Desc>
        We connect women who are looking to meet and co-work virtually and
        in-person based on interest. Perfect way to work on your business, side
        projects, studying in a distration-free space.
      </Desc>
    </SiteInfo>
    <Button text={"Hello"} />
    <Button dark text={"Goodbye"} />
  </Banner>
)

export default Hero
