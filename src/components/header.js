import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const SiteHeader = styled.header`
  text-align: center;
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #f2f2f2;
  padding: 2.3em 0;
`

const Heading = styled.h1`
  margin: 0;
`

//Custom component
const HomeLink = styled(Link)`
  color: #000;
  text-decoration: none;
`

const List = styled.ul`
  margin: 0;
`

const ListItem = styled.li`
  display: inline;
  padding: 0 1.4em 0 0;
  font-size: 0.9em;
`

const Highlight = styled.p`
  background: linear-gradient(180deg, rgba(248, 248, 129, 0) 65%, #f8f38c 65%);
  display: inline;
`

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <Inner>
      <Heading>
        <HomeLink to="/">
          <Highlight>{siteTitle}</Highlight>
        </HomeLink>
      </Heading>
      <List>
        <ListItem>
          <a href="https://airtable.com/shrGFpxg1vULrEVGm">Sign Up</a>
        </ListItem>
        <ListItem>
          <a href="mailto:hi@justirma.com">Contact us</a>
        </ListItem>
      </List>
    </Inner>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
