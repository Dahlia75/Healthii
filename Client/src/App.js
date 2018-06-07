import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Provider from './components/Provider';
// import Login from './components/Login';
import Providers from './components/Providers';
import Clients from './components/Clients';
import ClientProfile from './components/ClientProfile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/services/:sid/providers/:pid" component={Provider} />
            <Route exact path="/services/:sid/providers" component={Providers} />
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/clients/:cid" component={ClientProfile} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
