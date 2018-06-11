import React from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import Api from '../lib/api.js';
import '../App.css';
//import "../css/clients.css";
import Logo from '../img/HC2Go1.png';
import PopupReport from './PopupReport';



const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  // const statusChance = Math.random();
  return {
    service_name: 'physiotherapy',
    name: 'Dude Awesomepants',
    address: '123 gastown, vancouver',
    m_history: "Oh I am AMAZING!!!!!",
    gender: 'female',
    age: '30',
    date: 'monday, july 15, 2018',
    time: {
      from : 2452845824,
      to: 4248248,
    },
    status: 'pending',
    button: <PopupReport/>


    //if pending, want to link to profile, then in profile, will accept or decline
  };
};

 function makeData(len = 10) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    };
  });
}

 const Tips = () =>
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>;


class Client extends React.Component {
  constructor() {
    super();
    this.state = {
      // data: makeData()
      data: makeData()
    };
  }

  load() {
      // const sid = this.props.match.params.sid;

      Api.get(`/api/clients`).then(clients => {
          // const providers = clients.clientList.reduce((acc, provider) => {
          //     return acc.concat(current.providers);
          // }, []);
      console.log("clients: ", clients);

          this.setState({
              // data: clients
              // providers: service.providers,
              // selectedService : service.service_name,
              // selectedList : service.providers
          });
      });
  }

  componentDidMount(){
    this.load();
  }
  render() {
    const { data } = this.state;
    return(
      <div className="App">
        <section className="homepage__clients">
          <header className="header__clients">

            <div>


{/* service_name: 'physiotherapy',
    name: 'Dude Awesomepants',
    address: '123 gastown, vancouver',
    m_history: "Oh I am AMAZING!!!!!",
    gender: 'female',
    age: '30',
    date: 'monday, july 15, 2018',
    time: {
      from : 2452845824,
      to: 4248248,
    },
    status: 'pending',
    button: 'if pending, link to profile, if completed can delete?' */}

      <div>
        <h1>Provider Views Client Profile</h1>
          <ReactTable
            data={data}
            columns={[
              {
                Header: "Client Personal Info",
                columns: [
                  {
                    Header: "Name ",
                    accessor: "name"
                  },
                  {
                    Header: "Age",
                    accessor: "age"
                  },
                  {
                    Header: "Gender",
                    accessor: "gender"
                  },

                ]
              },
              {
                Header: "Appointment Info",
                columns: [

                  {
                    Header: "Address",
                    accessor: "address"
                  },

                  {
                    Header: "Status",
                    accessor: "status"
                  }
                ]
              },
              {
                Header: 'Action',
                columns: [
                  {
                    Header: "View Report",
                    accessor: "button"
                  }

                ]
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
          <br />
          <Tips />
          <img className="clients-logo" src={Logo} alt="clients-logo" />
          </div>

            </div>


          </header>
        </section>
      </div>
    );
  }
};

export default Client;