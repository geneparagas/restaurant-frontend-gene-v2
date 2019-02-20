import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import RestaurantList from './RestaurantList'
import FavoriteList from './FavoriteList'
import EditCollection from './EditCollection'
import { Link } from 'react-router-dom'

const ProjectDetails = (props) => {
  const { project } = props;
  const { restaurants } = props;
  const { favorites } = props;
  const id = props.match.params.id;
  const { time } = props;
  const { day } = props;
  const { displayfavorites } = props;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title left">{project.collection}</span>
            <EditCollection name={project.collection} collection={id} />
            <Link className="waves-effect waves-light right btn green" to={'/restaurant-frontend-gene-v2/Send-email/' + id}>Share <i className="material-icons right">send</i></Link>
          </div>
          <div className="card-content">
            <FavoriteList favorites={favorites} collection={id} restaurants={restaurants} />
          </div>
          <div className="card-action pink lighten-1 grey-text">
            <div className="col s12">
              <h5 className="remove-margin white-text">Add to Favorites</h5>
            </div>
            <RestaurantList restaurants={restaurants} collection={id} name={project.collection} favorites={favorites} time={time} day={day} displayfavorites={displayfavorites} />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.collections;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    restaurants: state.firestore.ordered.restaurants,
    favorites: state.firestore.ordered.favorite,
    time: state.firestore.ordered.time,
    day: state.firestore.ordered.day,
    displayfavorites: state.firestore.ordered.displayfavorites,
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    { collection: 'restaurants' },
    { collection: 'collections' },
    { collection: 'time' },
    { collection: 'day' },
    { collection: 'displayfavorites' },
    {
      collection: 'collections',
      doc: props.match.params.id,
      subcollections: [
        {
          collection: 'favorite',
        },
      ],
      storeAs: 'favorite'
    }
  ])
)(ProjectDetails)