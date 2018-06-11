import React, {Component} from 'react';

import Api from '../lib/api.js';

import '../css/main.css';

class Login extends Component {
  state = {loading: false}

  attemptLogin = (email, password) => {
    this.setState({loading: true});
    Api.post('/api/login', {
      email, password
    })
    .then(response => response.json())
    .then(response => {
      console.log("login value: ", response)
      if (response){
        this.props.setUser(response);
        if(this.props.history.length > 1){
          this.props.history.goBack()
        } else {
          this.props.history.push('/');
        }
      }
    })

  }
  render(){
    const onSubmit =(e) => {
      e.preventDefault();
      this.attemptLogin(e.target.elements.email.value, e.target.elements.password.value);
    };

    return(
      <div>
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <label>Email: </label>
          <input type="text" name="email" id="email" placeholder="email" className="email" />
          <label>Password: </label>
          <input type="password" name="password" id="password" placeholder="password" className="pass" />
          <button type="submit">login to your account</button>
        </form>
      </div>
    );
  }
};

export default Login;