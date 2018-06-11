import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'

// import FeedbackForm from './FeedbackForm';
import PopupFeedback from './PopupFeedback';
import Api from '../lib/api.js';
// import Star from './Star';

import '../App.css';
//import "../css/feedback.css";
import Logo from '../img/HC2Go1.png';



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
    button: <PopupFeedback />

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


class Feedback extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData(),
      showPopup: false,
      popup: <PopupFeedback />
    };
  }

  load() {
      const rid = this.props.match.params.rid;

      Api.post(`/api/reviews/${rid}/feedback`).then(service => {
          // const providers = service.providers.reduce((acc, provider) => {
          //     return acc.concat(current.providers);
          // }, []);
      // console.log("service: ", service.providers);

          this.setState({
              // providers: service.providers,
              // reviews: service.reviews,
              // selectedService : service.service_name,
              // selectedList : service.providers,
              // selectedSid : sid
          });
      });
  }

  componentDidMount() {
    this.load();
  }

  render() {
    const { data } = this.state;
    return(
      <div className="App">
        <section className="homepage__feedback">
          <header className="header__feedback">

            <div>

      <div>
        <h1>CLIENT GIVES PROVIDER FEEDBACK</h1>

          <ReactTable
            data={data}
            columns={[
              {
                Header: "Provider Personal Info",
                columns: [
                  {
                    Header: "Name",
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
          <img className="feedback-logo" src={Logo} alt="feedback"/>
          </div>

            </div>


          </header>
        </section>
      </div>
    );
  }
};

export default Feedback;










