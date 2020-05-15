import React from "react"
import styled from "styled-components"

import { useProjects } from "../hooks"

const Projects = ({ limit }) => {
  const projects = useProjects().slice(0, limit)
  return (
    <div>
      {projects.map(project => (
        <div key={project.name}>
          <a href={project.url} alt={project.name}>
            <div>
              {project.tech.map(tech => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <h3>{project.name}</h3>
            <img src={project.img} />
          </a>
        </div>
      ))}
    </div>
  )
}

export { Projects }
