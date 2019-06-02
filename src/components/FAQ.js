import React from "react"
import Column from "./Column/Column"
import styled from "styled-components"

const FAQContainer = styled.div`
  text-align: center;
  margin: 0 5% 5% 5%;
`

const FAQColumns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  padding: 3%;
  height: fit-content;
`
const Heading = styled.h2`
  font-size: 30px;
  display: block;
`
const Highlight = styled.p`
  background: linear-gradient(180deg, rgba(248, 248, 129, 0) 65%, #f8f38c 65%);
  display: inline;
`

const Title = styled.h3`
  margin: auto;
  padding: 4%;
`

const Desc = styled.p``

const FAQ = () => (
  <FAQContainer>
    <Heading>
      <Highlight>FAQ: ASKED & ANSWERED</Highlight>
    </Heading>
    <FAQColumns>
      <Column>
        <Title>Whose HeyDay for?</Title>
        <Desc>
          HeyDay is for LatinX folks. We want passionate, driven and motivated
          individuals looking to join the LatinX community to meet and co-work
          with others.
        </Desc>
      </Column>
      <Column yellow>
        <Title>Do I have to pay for HeyDay?</Title>
        <Desc>
          Nope! We're still in beta and making tweaks and imrpovements based on
          your feedback first. We urge you to submit feedback or concerns so
          that we can make the best experience for you.
        </Desc>
      </Column>
      <Column>
        <Title>Hmm...won't it be awkward co-working with a stranger?</Title>
        <Desc>
          Doesn't have to be! This is a new way of co-working with other LatinX
          people. It's a safe environement for you to meet, focus and work on
          what is important for you.
        </Desc>
      </Column>
    </FAQColumns>
  </FAQContainer>
)

export default FAQ
