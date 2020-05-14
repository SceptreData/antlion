import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi. I'm David</h1>
    <p>
      I'm a web developer currently located in the beautiful city of Edmonton,
      Alberta.
    </p>
    <p>Check out some of the stuff I've built.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage
