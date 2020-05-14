import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

import { Sidebar } from "./Sidebar"
import { Screen } from "../constants"

import "./style.css"

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <Container>
      <Sidebar />
      <Main>{children}</Main>
      {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
    </Container>
  )
}

const Container = styled.div`
  max-width: 1070px;
  margin: 0 auto;
  @media (min-width: ${Screen.md}) {
    display: flex;
  }
`

const Main = styled.main`
  padding: 2.1875rem;
  @media (min-width: ${Screen.md}) {
    padding: calc(1.875rem + 30px) 2.1875rem;
  }
`

export { Layout }
