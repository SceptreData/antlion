import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const useProjects = () => {
  const { allProjectsJson } = useStaticQuery(
    graphql`
      query ProjectsQuery {
        allProjectsJson {
          edges {
            node {
              id
              name
              tech
              url
              img {
                publicURL
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return allProjectsJson.edges.map(edge => edge.node)
}

export { useProjects }
