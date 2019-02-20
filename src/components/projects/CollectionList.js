import React from 'react'
import CollectionSummary from './CollectionSummary'
import { Link } from 'react-router-dom'

const CollectionList = ({ collections, displayfavorites }) => {
  return (
    <div className="project-list section">
      {collections && collections.map(project => {
        return (
          <Link to={"/restaurant-frontend-gene-v2/project/" + project.id} key={project.id}>
              <CollectionSummary project={project} key={project.id} displayfavorites={displayfavorites} />
            </Link>
        )
      })}
    </div>
  )
}

export default CollectionList
