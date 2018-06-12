import Popup from 'reactjs-popup';
import React from 'react';

export default () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
);