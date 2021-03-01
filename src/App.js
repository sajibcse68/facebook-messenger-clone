import React, { useState, useEffect, useRef } from 'react';
import firebase from 'firebase';
import logo from './logo.svg';
import { Form, Button } from 'react-bootstrap';
import Message from './components/Message';
import db from './config/firebase';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snap) => {
        setMessages(snap.docs.map((doc) => doc.data()));
      });
  }, []);

  useEffect(() => {
    if (!username) {
      setUsername(prompt('Enter your username, please!'));
    }
  }, []);

  useEffect(() => {
    // scroll to latest message always!
    msgConRef.current.scrollTop = msgConRef.current.scrollHeight;
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // check if input valid
    if (!(input && input.trim(' '))) return;

    db.collection('messages').add({
      message: input,
      username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // setMessages([
    //   ...messages,
    //   {
    //     username,
    //     message: input,
    //   },
    // ]);
    setInput('');
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const msgConRef = useRef(null);

  return (
    <div className="App">
      <div className="title">{`Sajib: Hey welcome '${username}' 🚀!`}</div>
      <div className="msg-cont">
        <div ref={msgConRef} className="msg-cont">
          <Message username={username} messages={messages}></Message>
        </div>

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
      </div>
    </div>
  );
}

export default App;
