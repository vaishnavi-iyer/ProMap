import React, {Component} from 'react'
import {connect} from 'react-redux'
import NavLink from './navLink.jsx'

class Navbar extends Component {
  render() {
    return (
      <div>
        <div id="navbar">
          <div><NavLink to='/' onlyActiveOnIndex> <h3> Home </h3> </NavLink> </div>
          <div><NavLink to='/users'> <h3> Users </h3> </NavLink> </div>
          <div><NavLink to='/projects'> <h3> Projects </h3> </NavLink> </div>
          <div><NavLink to='/about'> <h3> About </h3> </NavLink> </div>
        </div>
        <div id="main">
        {this.props.children}
        </div>
      </div>
    )
  }
}
export default Navbar
