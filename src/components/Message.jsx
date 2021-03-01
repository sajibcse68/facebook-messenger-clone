import React from 'react';

import './../css/Message.css';

function Message({ username, messages }) {

  return messages.map((msg) => (
    <>
      <p
        key={msg.timestamp?.seconds}
        className={username !== msg.username ? 'msg-left' : 'msg-right'}
      >
        {`${username !== msg.username ? `${msg.username}: ` : ''}`}
        <span>{msg.message}</span>
      </p>
    </>
  ));
}

export default Message;
