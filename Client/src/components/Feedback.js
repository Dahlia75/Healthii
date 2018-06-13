import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import PopupFeedback from './PopupFeedback';
import Api from '../lib/api.js';
// import Star from './Star';
import '../css/feedback.css';

import PopupReport from './PopupReport';
import '../App.css';
import Logo from '../img/HC2Go1.png';
import Sidebar from './Sidebar';

//import "../css/feedback.css";
// import Star from './Star';

const Tips = () =>
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>;


class Feedback extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      showPopup: false

    };
  }

  makeData(providers) {
   return providers.forEach(function(element){
    element['button'] = <PopupFeedback pid={element.pid}/>
   });
  }

  load() {
      Api.get(`/api/reviews`).then(providers => {
        this.makeData(providers);
        this.setState({
          data: providers
        });
      })
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
                    Header: "Gender",
                    accessor: "gender"
                  },
                  {
                    Header: "Service",
                    accessor: "service_name"
                  },
                  {
                    Header: "Date",
                    accessor: "date"
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
          <Sidebar/>
        </section>
      </div>
    );
  }
};

export default Feedback;