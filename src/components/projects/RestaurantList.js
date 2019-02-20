import React, { Component } from 'react'
import AddFavorite from './AddFavorites'

class RestaurantList extends Component {
  state = { searchString: '', searchTime: '', searchDay: ''  }

  handleChange = (e) => {
    this.setState({ searchString: e.target.value });
  }
  handleTime = (e) => {
    this.setState({ searchTime: e.target.value });
  }
  handleDay = (e) => {
    this.setState({ searchDay: e.target.value });
  }

  render() {
    var time = this.props.time;
    var day = this.props.day;
    var restaurants = this.props.restaurants,
      searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) {
      restaurants = restaurants.filter(function (i) {
        return i.restaurant.toLowerCase().match(searchString)
      });
    };
    var searchTime = this.state.searchTime.trim().toLowerCase();
    var searchDay = this.state.searchDay.trim().toLowerCase();
    var timemanagement = searchDay + searchTime;
    if (searchTime.length > 0 || searchDay.length > 0  ) {
      restaurants = restaurants.filter(function (i) {
        return i.selecttime.toLowerCase().match(timemanagement)
      });
    }

    let collection = this.props.collection;
    let name = this.props.name;
    return (
      <div className="project-list section">
        <div className="input-field">
          <div className="row">
            <div className="col s6"><input type="text" className="placeholder-white white-text" value={this.state.searchString} onChange={this.handleChange} placeholder="Search Name" /></div>
            <div className="col s3">
            <select onChange={this.handleDay} className="browser-default">
                  <option value=''>Select Day</option>
                  {day && day.map(day => {
                    return (
                      <option key={day.id} value={day.name}>{day.name}</option>
                    )
                  })}
                </select>
            </div>
            <div className="col s3">
            <select onChange={this.handleTime} className="browser-default">
                  <option value=''>Select Time</option>
                  {time && time.map(time => {
                    return (
                      <option key={time.id} value={time.name}>{time.name}</option>
                    )
                  })}
                </select>
            </div>
          </div>
        </div>
        {restaurants && restaurants.filter(project => project.pick !== "true").map(project => {
          return (
            <AddFavorite project={project} key={project.id} name={name} collection={collection} />
          )
        })}
      </div>
    )
  }
}

export default RestaurantList
