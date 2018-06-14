import React from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import Api from '../lib/api.js';
import '../App.css';
//import "../css/clients.css";
import Logo from '../img/HC2Go1.png';
import PopupReport from './PopupReport';
import BookingApproval from './BookingApproval';

import '../css/clients.css';
import Sidebar from './Sidebar';


// const range = len => {
//   const arr = [];
//   for (let i = 0; i < len; i++) {
//     arr.push(i);
//   }
//   return arr;
// };

// const newPerson = () => {
//   // const statusChance = Math.random();
//   return {
//     service_name: 'physiotherapy',
//     name: 'Dude Awesomepants',
//     address: '123 gastown, vancouver',
//     m_history: "Oh I am AMAZING!!!!!",
//     gender: 'female',
//     age: '30',
//     date: 'monday, july 15, 2018',
//     time: {
//       from : 2452845824,
//       to: 4248248,
//     },
//     status: 'pending',
//     button: <PopupReport/>


//     //if pending, want to link to profile, then in profile, will accept or decline
//   };
// };

const Tips = () =>
 <div style={{ textAlign: "center" }}>
   <em>Tip: Hold shift when sorting to multi-sort!</em>
 </div>;


class Client extends React.Component {
  constructor() {
    super();
    this.state = {
      // data: makeData()
      data: []
    };
  }

  makeData(clients){
    return clients.forEach(function(element){
      element["button"] = <PopupReport aid={element.aid} className='clients-button'/>;
      element["button2"] = <BookingApproval aid={element.aid} status={element.status} className='clients-button'/>;
    });
  }

  load() {
    Api.get(`/api/clients`)
    .then(clients => {
      this.makeData(clients);
      this.setState({
        data: clients
      });
    });
  }

  componentDidMount(){
    this.load();
  }

  render() {
    const { data } = this.state;
    const columns = [
      {
        Header: "Client Personal Info",
        columns: [
          {
            Header: "Name",
            accessor: "name",
            width: 200
          },
          {
            Header: "Age",
            accessor: "age",
            width: 80
          },
          {
            Header: "Gender",
            accessor: "gender",
            width: 80
          },
          {
            Header: "Address",
            accessor: "address",
            width: 350
          },
        ]
      },
      {
        Header: "Appointment Info",
        columns: [

          {
            Header: "Date",
            accessor: "date",
            width: 200
          },

          {
            Header: "Time",
            accessor: "start_time",
            width: 80
          },

        ]
      },
      {
        Header: 'Action',
        columns: [
          {
            Header: "Status",
            accessor: "button2",
            width: 150
          },
          {
            Header: "Add Report",
            accessor: "button",
            width: 200
          }
        ]
      }
    ]

    return(
      <div className="App">
        <section className="homepage__clients">
          <header className="header__clients">
            <div>
              <div>
                <h1>YOUR CLIENTS</h1>
                <ReactTable
                  data={data}
                  columns={columns}
                  defaultPageSize={10}
                  className="-striped -highlight"
                />
                <br />
                <Tips />
                <img className="clients-logo" src={Logo} alt="clients-logo" />
              </div>
            </div>
          </header>
          <Sidebar/>
        </section>
      </div>
    );
  }
};

export default Client;