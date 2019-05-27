import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const SiteHeader = styled.header`
  background: #fff;
  margin: 0 4% 0 4%;
`

const Inner = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
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
  padding: 0;
  text-align: center;
`

const ListItem = styled.li`
  display: inline;
  list-style-type: none;
`

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <Inner>
      <Heading>
        <HomeLink to="/">{siteTitle}</HomeLink>
      </Heading>
      <List>
        <ListItem> How it Works </ListItem>
        <ListItem> Contact </ListItem>
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
