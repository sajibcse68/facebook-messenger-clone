import React, { useState } from 'react';
import logo from './logo.svg';
import { Form, Button } from 'react-bootstrap';

import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessages([...messages, input]);
    setInput('');
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <div className="title">Sajib: Hey Welcome 🚀!</div>
      <div className="msg-cont">
        <Form className="msg-form" onSubmit={handleSubmit}>
          <Form.Group className="email-input">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              ref={(input) => input && input.focus()}
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Enter a message"
            />
          </Form.Group>

          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>

        <div className="show-msg">
          {messages.map((msg) => (
            <p>{msg}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
