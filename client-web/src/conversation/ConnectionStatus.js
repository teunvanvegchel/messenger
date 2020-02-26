import React from 'react';
import './ConnectionStatus.css';

const ConnectionStatus = ({ status }) => {
  switch (status) {
    case 'CONNECTING':
      return (
        <div className="connection_status--connecting">
          Connecting...
        </div>
      );
    case 'DISCONNECTED':
      return (
        <div className="connection_status--disconnected">
          Disconnected
        </div>
      );
    default:
      return (
        <></>
      );
  }
};

export default ConnectionStatus;
