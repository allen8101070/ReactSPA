import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Link } from 'react-router-dom'
import createHistory from 'history/createHashHistory';
import SayHi from './SayHi';

const history = createHistory()

const Repos = () => (
  <div>
    <h2>Repos</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)
const Myapp = () => (
  <div>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to="/">LOGO</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to='/repos'>Repos</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/about'>About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/sayhi'>SayHi</Link>
                  </li>
                </ul>
              </div>
            </nav>

            <Route exact path='/' component={Myapp} />
            <Route path='/repos' component={Repos} />
            <Route path='/about' component={About} />
            <Route path='/sayhi' component={SayHi} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
