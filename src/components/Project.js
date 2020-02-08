import React from 'react'
import { Link } from '@reach/router'

export const Project = ({ project, ...props }) => (
  <Link to={project.id} className="project">
    <div
      {...props}
      style={{
        background: `center / cover no-repeat url(${project.thumbnailImage})`,
      }}
    />
    <h4>
      {project.title}
      <br />
      {project.shortDescription}
    </h4>
  </Link>
)
