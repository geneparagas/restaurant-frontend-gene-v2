import React, { Component } from 'react'
import ProjectSummary from './ProjectSummary'

class ProjectList extends Component {
  state = { searchString: '', searchTime: '', searchDay: '' }

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
    var restaurants = this.props.restaurants;
    var time = this.props.time;
    var day = this.props.day;
    var searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) {
      restaurants = restaurants.filter(function (i) {
        return i.restaurant.toLowerCase().match(searchString)
      });
    }
    var searchTime = this.state.searchTime.trim().toLowerCase();
    var searchDay = this.state.searchDay.trim().toLowerCase();
    var timemanagement = searchDay + searchTime;
    if (searchTime.length > 0 || searchDay.length > 0  ) {
      restaurants = restaurants.filter(function (i) {
        return i.selecttime.toLowerCase().match(timemanagement)
      });
    }
    return (
      <div className="project-list">
        <div className="input-field">
          <div className="white-text"><h4 className="remove-margin-bottom red-text lighten-1">Restaurants</h4></div>
          <div className="input-field">
            <div className="row">
              <div className="col s4"><input type="text" className="white-text placeholder-white" value={this.state.searchString} onChange={this.handleChange} placeholder="Search Name" /></div>
              <div className="col s4">
                <select onChange={this.handleDay} className="browser-default">
                  <option value=''>Select Day</option>
                  {day && day.map(day => {
                    return (
                      <option key={day.id} value={day.name}>{day.name}</option>
                    )
                  })}
                </select>
              </div>
              <div className="col s4">
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
        </div>
        {restaurants && restaurants.map(project => {
          return (
            <ProjectSummary project={project} key={project.id} />
          )
        })}
      </div>
    )
  }
}

export default ProjectList
