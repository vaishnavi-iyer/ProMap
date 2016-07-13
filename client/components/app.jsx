import React, {Component} from 'react'
// import Routes from './routes.jsx'
import Navbar from './navbar.jsx'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import About from './about.jsx'
import Home from './home.jsx'
import Users from './users.jsx'
import Projects from './projects.jsx'

export default class App extends Component {
  render() {
    return (
      <div>
      <Router history={browserHistory}>
        <Route path="/" component={Navbar}>
        <IndexRoute component={Home}/>
          <Route path="/users" component={Users}>
            <Route path="/users/:userId" component={Users}/>
          </Route>
          <Route>
            <Route path="/projects" component={Projects} />
          </Route>
          <Route path="/about" component={About}/>
        </Route>
      </Router>
      {this.props.children}
      </div>
    )
  }
}

