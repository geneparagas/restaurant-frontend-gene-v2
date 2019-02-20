import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import CollectionList from '../projects/CollectionList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    const { restaurants } = this.props;
    const { collections } = this.props;
    const { displayfavorites } = this.props;
    const { time } = this.props;
    const { day } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList restaurants={restaurants} time={time} day={day} />
          </div>
          <div className="col s12 m5 offset-m1">
           <div className="white-text"><h4 className="remove-margin-bottom teal-text darken-2">Collections <Link className="btn-floating btn pulse" to='/restaurant-frontend-gene-v2/create'><i className="material-icons">add</i></Link></h4></div>
              <CollectionList collections={collections} displayfavorites={displayfavorites} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.firestore.ordered.restaurants,
    collections: state.firestore.ordered.collections,
    displayfavorites: state.firestore.ordered.displayfavorites,
    time: state.firestore.ordered.time,
    day: state.firestore.ordered.day,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'restaurants' },
    { collection: 'collections' },
    { collection: 'displayfavorites' },
    { collection: 'time' },
    { collection: 'day' }
  ]),

)(Dashboard)
