import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const navStyles = {
  display: `inline-block`,
  textAlign: `left`,
  position: `absolute`,
  width: `300px`,
  marginTop: `10px`,
  right: 0
};

const ulStyles = {
  listStyleType: `none`,
  position: `absolute`,
  width: `auto`
};

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, display: `inline-block` }}>
        <Link
          to="/"
          style={{
            width: `200px`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav style={navStyles}>
        <ul style={ulStyles}>
          <li style={{ display: `inline-block`, marginLeft: `6px`}}>How it works</li>
          <li style={{ display: `inline-block`,  marginLeft: `16px`}}>Contact</li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
