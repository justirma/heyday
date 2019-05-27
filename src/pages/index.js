import React from "react"
// eslint-disable-next-line
import { Link } from "gatsby"

import Layout from "../components/layout"
// eslint-disable-next-line
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  </Layout>
)

export default IndexPage
