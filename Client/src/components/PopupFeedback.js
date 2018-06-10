import React from "react";
import Popup from "reactjs-popup";
import FeedbackForm from "./FeedbackForm";
import Api from '../lib/api.js';

// export default () => (
//   <Popup trigger={<button> Trigger</button>} position="right center">
//     <div><Report/></div>
//   </Popup>
// );

export default () => (
    <Popup trigger={<button className="button"> Leave Feedback </button>} modal>
      {close => (
        <div className="modal">
          <div className="content">
          <div><FeedbackForm/></div>

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