import React, { Component } from 'react';
import { BrowserRouter, Route, /*Redirect,*/ Switch} from 'react-router-dom';

import Api from './lib/api.js';

import Home from './components/Home';
// import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Providers from './components/Providers';
import Provider from './components/Provider';
import Clients from './components/Clients';
import ClientProfile from './components/ClientProfile';
import Feedback from './components/Feedback';

import './App.css';

class App extends Component {

  //login details
  constructor() {
    super();
    this.state = {
      services: [],
      loading: true };
  }
  componentDidMount() {
    console.log("me: hi");
    Api.get('/api/users/me')
      .then((response) => {
        console.log("me: ", response);
        this.setState({
          loading: false,
          me: response.data });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }
  setUser = (user) => {
    this.setState({
      me: user,
    });
  }
  //login details finished

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            path="/login"
            render={props => <Login setUser={this.setUser} history={props.history} />}
          />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/services/:sid/providers" component={Providers} />
            <Route exact path="/services/:sid/providers/:pid" component={Provider} />
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/clients/:cid" component={ClientProfile} />
            <Route exact path="/reviews" component={Feedback} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
