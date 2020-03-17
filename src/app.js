import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

import 'react-bootstrap'
import './style.scss'

// import Navbar from './components/Navbar'
import Home from './components/Home'
import Game from './components/Game'

const App = () => (
  <BrowserRouter basename="/">
    {/* <Navbar /> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/game" component={Game} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)