import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/Layout"
import { Projects } from "../components/Projects"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi. I'm David</h1>
      <p>I'm a developer, designer, and creation enthusiast.</p>
      <p>
        I make websites and apps using modern tools like Next.JS,Gatsby and
        React Native.
      </p>
      <p>Currently living in the beautiful city of Edmonton, Alberta.</p>
      <p>Check out some of the stuff I've built:</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <Projects limit={3} />
    </Layout>
  )
}

export default IndexPage
