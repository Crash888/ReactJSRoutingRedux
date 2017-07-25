import React from 'react';
import './App.css';
import { Index } from './components/Index';
import { Home } from './views/Home/Home';
import { About } from './views/About/About';

import { 
  BrowserRouter as Router, 
  Route } from 'react-router-dom';

//const Home = () => (<div><h1>Welcome Home</h1></div>)
//const About = () => (<div><h1>About</h1></div>)

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
            <Index>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
            </Index>
        </div>
      </Router>
    );
  }
}

export default App;
