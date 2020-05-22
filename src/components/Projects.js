import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import { useProjects } from "../hooks"
import { Screen, Color, Shadow } from "../constants"

const Projects = ({ limit }) => {
  const projects = useProjects().slice(0, limit)
  return (
    <Container>
      {projects.map(project => (
        <a href={project.url} alt={project.name}>
          <Project
            key={project.name}
            fluid={project.img.childImageSharp.fluid}
          />
          <Label>
            <div>
              {project.tech.map(tech => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <h3>{project.name}</h3>
          </Label>
          {/* <Img fluid={project.img.childImageSharp.fluid} alt={project.name} /> */}
        </a>
      ))}
    </Container>
  )
}

const Container = styled.div`
  a,
  a:visited {
    display: flex;
    background: #444;
    border-radius: 4px;
    color: ${Color.white};
    width: 100%;
    max-width: 300px;
    height: 300px;
    padding: 0.25rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    flex-direction: column;
    justify-content: flex-end;
    box-shadow: ${Shadow.lg};
    text-decoration: none;
    transition: all 0.2s ease;
    h3 {
      margin: 0;
      margin-top: 0.15rem;
    }
    &:hover {
      color: ${Color.primary};
      transform: scale(1.05);
      transition: all 0.2s ease;
    }
  }
  @media (min-width: ${Screen.md}) {
    display: flex;
    flex-wrap: wrap;
  }
`

const Project = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  max-width: 400px;

  background-position: top;
  /* padding: 1rem; */

  @media (min-width: ${Screen.md}) {
    background-repeat: none;
    margin-right: 1.25rem;
  }
`

const Label = styled.div`
  width: 100%;
  background: #444;
  margin-right: 1.25rem;
  padding: 0.5rem 1.125rem;
  text-align: right;
  span {
    background: #222;
    border-radius: 6px;
    padding: 0.25rem;
    margin-left: 1rem;
  }
`
export { Projects }
