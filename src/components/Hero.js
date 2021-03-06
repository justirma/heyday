import React from "react"
import styled from "styled-components"
import Button from "./Button/Button"

const Banner = styled.div`
  height: 600px;
  margin: 0 5% 5% 5%;
  background-color: #f0d5d4;
  align-items: center;
  opacity: 1;
  border-radius: 4px;
`

const SiteInfo = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  position: relative;
  padding-top: 15%;
  margin: 0 5% 5% 5%;
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
  transform: translate(-50%, -30%);
  text-align: center;
  width: 70%;
`
const ButtonContainer = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 10%;
`
const Highlight = styled.p`
  background: linear-gradient(180deg, rgba(248, 248, 129, 0) 65%, #f8f38c 65%);
  display: inline;
`
const Hero = () => (
  <Banner>
    <SiteInfo>
      <Heading>For LatinX who co-work</Heading>
      <Desc>
        We connect LatinXTech who are looking to meet and co-work virtually and
        in-person based on interest. Perfect way to work on your business, side
        projects, studying while in a{" "}
        <Highlight>distration-free space.</Highlight>
      </Desc>
      <ButtonContainer>
        <a href="https://airtable.com/shrGFpxg1vULrEVGm">
          <Button text={"Find co-worker"} />
        </a>
        <a href="#ThreeColumn">
          <Button dark text={"How it works"} />
        </a>
      </ButtonContainer>
    </SiteInfo>
  </Banner>
)

export default Hero
