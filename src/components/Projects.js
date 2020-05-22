import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { GitHub } from "react-feather"

import { useProjects } from "../hooks"
import { Screen, Color, Shadow } from "../constants"

const Projects = ({ limit }) => {
  const projects = useProjects().slice(0, limit)
  return (
    <Container>
      {projects.map(project => (
        <Project key={project.name}>
          <a href={project.url} alt={project.name}>
            <ProjectImage fluid={project.img.childImageSharp.fluid} />
          </a>

          <Label>
            <div className="tech-bar">
              {project.tech.map(tech => (
                <span key={tech}>{tech}</span>
              ))}
              <GithubLink href={project.github} />
            </div>
            <a href={project.url} alt={project.name}>
              <h3>{project.name}</h3>
            </a>
            <p>{project.description}</p>
          </Label>
        </Project>
      ))}
    </Container>
  )
}

const GithubLink = ({ href }) => {
  if (!href) return null

  return (
    <IconLink href={href} style={{ display: "inline" }}>
      <GitHub size={20} />
    </IconLink>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Project = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  box-shadow: ${Shadow.lg};
  border: 1px solid #dadada;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1.125rem;
  transition: transform 0.15s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: ${Shadow.xl};
  }
`

const IconLink = styled.a`
  color: #555;
  margin-left: 1rem;
  transition: color 0.15s ease-in-out;
  &:hover {
    color: ${Color.primary};
  }
`
const ProjectImage = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  background-position: center top;
  background-size: contain;
  overflow: hidden;
`

const Label = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: right;
  color: #333;
  background: white;
  width: 100%;
  padding: 0.5rem 1rem;
  border-top: 1px solid #d3d3d3;
  .tech-bar {
    display: flex;
    align-items: center;
  }

  span {
    background: #444;
    color: white;
    border-radius: 16px;
    padding: 3px 0.75rem;
    margin-right: 1rem;
    font-size: 12px;
    &:last-of-type {
      margin-right: 0;
    }
  }
  a,
  a:visited {
    display: block;
    color: #333;
    text-decoration: none;
    transition: all 0.15s ease-in-out;
    &:hover {
      color: ${Color.primary};
    }
  }
  h3 {
    margin: 0;
    margin-top: 3px;
    font-weight: 300;
  }

  p {
    margin: 0;
    font-size: 0.8rem;
  }
`
/* 
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
   /* padding: 1rem;

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
*/

export { Projects }
