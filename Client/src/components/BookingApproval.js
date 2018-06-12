import React from "react";
//import Warper from "./Warper";
import Popup from "reactjs-popup";
import Api from '../lib/api.js';

export default class BookingApproval extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  openModal = () => {
    this.setState({ open: true });
  };
  closeModal = () => {
    this.setState({ open: false });
  };
  postBookingResponse(aid, status){
    console.log("postBookingResponse for aid: ", aid, status);
    Api.post(`/appointments/${aid}/confirmation`, { status })
    .then(this.closeModal);
  };
  acceptBooking = () =>{
    console.log("props for booking acceptance", this.props.aid);
    this.postBookingResponse(this.props.aid, 'Approved');
  };
  declineBooking = () =>{
    console.log("props for booking decline", this.props.aid);
    this.postBookingResponse(this.props.aid, 'Declined');
  };

  render() {
    return (
      <div>
        <button className="button" onClick={this.openModal}>
          {this.props.status}
        </button>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div >
            <a className="close" onClick={this.closeModal}>
              &times;
            </a>
            Approve or Decline
            <div>
              <button className="button" onClick={this.acceptBooking}>
                Approve
              </button>
              <button className="button" onClick={this.declineBooking}>
                Decline
              </button>
            </div>
          </div>
        </Popup>
      </div>
    );
  }
}