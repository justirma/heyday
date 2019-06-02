import React from "react"
import styled from "styled-components"
import Button from "./Button/Button"

const Banner = styled.div`
  height: 300px;
  margin: 10% 5% 5% 5%;
  background-color: #f0d5d4;
  align-items: center;
  opacity: 1;
`

const SiteInfo = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  position: relative;
  padding-top: 5%;
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

const SecondHero = () => (
  <Banner>
    <SiteInfo>
      <Heading>Ready to find a co-working partner?</Heading>
      <Desc>
        Our most successful co-workers schedule and meet with a partner 2x a
        week for 1 hour. Remember, be respectful and get work done!
      </Desc>
      <ButtonContainer>
        <a href="https://airtable.com/shrGFpxg1vULrEVGm">
          <Button big text={"Find a co-worker"} />
        </a>
      </ButtonContainer>
    </SiteInfo>
  </Banner>
)

export default SecondHero
