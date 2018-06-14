import React from "react";
import Popup from "reactjs-popup";
import ReportForm from "./ReportForm";
// import Api from '../lib/api.js';

export default class PopupReport extends React.Component {

  constructor(props) {
   super(props);
  }

render(){

return(
    <Popup trigger={<button className="clients-button"> Enter Notes from Meeting </button>} modal>
      {close => (
        <div className="">
          <div className="content">

          <div><ReportForm aid={this.props.aid} report={this.props.report}/></div>
          <br />
        </div>
        <div className="actions">
          <button
            className="clients-button"
            onClick={() => {
              console.log('modal closed ')
              close()
            }}>
            close
          </button>
        </div>
      </div>
    )}
  </Popup>
);}
}