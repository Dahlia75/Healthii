import React from "react";
import Popup from "reactjs-popup";
import ReportForm from "./ReportForm";
// import Api from '../lib/api.js';

// export default () => (
//   <Popup trigger={<button> Trigger</button>} position="right center">
//     <div><Report/></div>
//   </Popup>
// );

export default () => (
    <Popup trigger={<button className="button"> Enter Notes from Meeting </button>} modal>
      {close => (
        <div >
          <div className="content">
          <div><ReportForm/></div>

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