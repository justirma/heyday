import React from "react"
import Column from "./Column/Column"
import styled from "styled-components"

const FAQContainer = styled.div`
  margin: 0 5% 5% 5%;
  text-align: center;
`

const FAQColumns = styled.section`
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

const Title = styled.h3`
  margin: auto;
  padding: 4%;
`

const DottedLine = styled.hr`
  width: 100%;
  border: 1px dashed rgba(0, 0, 0, 0.15);
  margin-top: 5%;
`

const Desc = styled.p``

const Highlight = styled.p`
  background: linear-gradient(180deg, rgba(248, 248, 129, 0) 65%, #f8f38c 65%);
  display: inline;
`

const ThreeColumn = () => (
  <FAQContainer>
    <Heading>
      <Highlight>HOW IT WORKS</Highlight>
    </Heading>
    <FAQColumns>
      <Column yellow>
        <Title>Step 1</Title>
        <Desc>
          Fill out our entry form and tell us a little bit about yourself, your
          interests, location and co-working preferences.
        </Desc>
      </Column>
      <Column>
        <Title>Step 2</Title>
        <Desc>
          Once we receive your form, HeyDay will begin searching for a another
          co-worker who matches your interests and co-working preferences.
        </Desc>
      </Column>
      <Column yellow>
        <Title>Step 3</Title>
        <Desc>
          Match found! You'll receive an email confirming a match and steps to
          schedule your first co-working session + tips.
        </Desc>
      </Column>
      <DottedLine />
    </FAQColumns>
  </FAQContainer>
)
export default ThreeColumn
