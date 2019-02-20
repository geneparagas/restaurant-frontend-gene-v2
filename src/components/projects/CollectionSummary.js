import React from 'react'

const CollectionSummary = ({project, displayfavorites}) => {
  return (
    <div className="card z-depth-1 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title remove-margin-bottom">{project.collection} <div className="btn pink lighten-1 right">see details</div></span>
        <ul className="browser-default">
      {displayfavorites && displayfavorites.filter(projects => projects.name === project.collection || projects.collectId === project.collectId).map(projects => {
        return (
        <li className="remove-margin-bottom grey-text text-darken-3" key={projects.id}><h6>{projects.restaurant}</h6></li>
        )
      })}
      </ul>
      </div>
    </div>
  )
}

export default CollectionSummary
