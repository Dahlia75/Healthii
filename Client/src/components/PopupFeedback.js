import React from "react";
import Popup from "reactjs-popup";
import FeedbackForm from "./FeedbackForm";

export default class PopupFeedback extends React.Component {

  constructor(props) {
   super(props);
  }

render(){
return(
   <Popup trigger={<button className="button"> Leave Feedback </button>} modal>
     {close => (
       <div >
         <div className="content">
         <div><FeedbackForm pid={this.props.pid}/></div>

           <br />

         </div>
         <div className="actions">

           <button
             className="button"
             onClick={() => {
               console.log('modal closed ')
               close()
             }}
           >
             close
           </button>
       </div>
       </div>
     )}
   </Popup>
 );
}}