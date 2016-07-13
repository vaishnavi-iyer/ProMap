import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import About from './about.jsx'
import Home from './home.jsx'
import Users from './users.jsx'
import Projects from './projects.jsx'


export default (
    <Route path="/" component={Home}>
      <Route path="/users" component={Users}>
        <Route path="/users/:userId" component={Users}/>
      </Route>
      <Route>
        <Route path="/projects" component={Projects} />
      </Route>
      <Route path="/about" component={About}/>
    </Route>
)


