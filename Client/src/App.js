import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;


// app.get('/users/:id')

// axios.get('/users/' + userId)