import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      title: 'Appointments',
      appointment:[],
      test: 'Helloooooooooooo'
    }
  }
  componentDidMount(){
    var that= this;
    // console.log("8888888");
    fetch('http://localhost:3001/api')
      .then(res => res.json())
      .then(data => that.setState({
              appointment: data
            })
         )
      console.log(this.state.appointment);
  }
  componentWillMount() {
    console.log('Will be called on the server...')
  }


  addReview(event){
    event.preventDefault();
    var that= this;
    let appointment_data={
      CID: this.refs.C_ID.value,
      PID: this.refs.P_ID.value,
      RATING: this.refs.RATING.value,
      DES: this.refs.SID.value,
    };
  }
  addAppoint(event){
    event.preventDefault();
    var that= this;
    let appointment_data={
      CID: this.refs.CID.value,
      PID: this.refs.PID.value,
      SID: this.refs.SID.value
    };

    var request = new Request('http://localhost:3001', {
      method: 'POST',
      headers: new Headers({'Content-Type':'application/json'}),
      body: JSON.stringify(appointment_data)
    });

  //xmlhttprequest()
  fetch(request)
    .then(function(response){
      response.json()
       .then(function(data){
          let appoint = that.state.appointment;
           appoint.push(appointment_data);
           that.setState({
            appointment: appoint
         })
           console.log(appoint);
       })
    })
    .catch(function(err){
      console.log(err)
    })
  }
  render() {
    let title =this.state.title;
    let appt = this.state.appointment;  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form ref="testForm">
          <input type="text" id="CID" name="CID" ref="CID" placeholder="CID"/>
          <input type="text" ref="PID" placeholder="PID"/>
          <input type="text" ref="SID" placeholder="SID"/>
          <button type="button" onClick={this.addAppoint.bind(this)}> Add Appointment</button>
        </form>
        <form>
          <input type="text" ref="C_ID" placeholder="CID"/>
          <input type="text" ref="P_ID" placeholder="PID"/>
          <input type="text" ref="RATING" placeholder="RATING"/>
          <input type="text" ref="DES" placeholder="Description"/>
          <button type="button" onClick={this.addReview.bind(this)}> Add Review</button>
        </form>
        <pre>{JSON.stringify(appt)}</pre>
      </div>
    );
  }
}
export default App;
