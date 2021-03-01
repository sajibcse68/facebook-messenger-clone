import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDxhfGL20OjZtSBTxVLt0QEgstHfj4kmhs',
  authDomain: 'facebook-messenger-clone-f4da7.firebaseapp.com',
  projectId: 'facebook-messenger-clone-f4da7',
  storageBucket: 'facebook-messenger-clone-f4da7.appspot.com',
  messagingSenderId: '643248467011',
  appId: '1:643248467011:web:91e3118ad878248fb138f6',
  measurementId: 'G-119Q8EJ36N',
});

const db = firebaseApp.firestore();

export default db;