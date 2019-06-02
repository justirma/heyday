import React from "react"
import styled from "styled-components"

const Section = styled.section`
  margin: 0 7% 5% 7%;
  padding: 10%;
`

const Highlight = styled.p`
  background: linear-gradient(180deg, rgba(248, 248, 129, 0) 65%, #f8f38c 65%);
  display: inline;
`

const MainHeading = styled.h2`
  text-transform: uppercase;
  text-align: center;
`
const SubQuote = styled.p`
  font-size: 2.5vmin;
  text-align: center;
  margin: 0 auto;
`

const FullSection = () => (
  <Section>
    <MainHeading>
      <Highlight>What we believe in</Highlight>
    </MainHeading>
    <SubQuote>
      LatinX folks need a space to co-work, build, learn and grow. We want our
      members to flourish by committing to co-work with fellow members to finish
      a design for work, start a blog post or plan your next vacation. Sometimes
      all we need is time and a little focus with a co-working partner.
    </SubQuote>
  </Section>
)

export default FullSection
