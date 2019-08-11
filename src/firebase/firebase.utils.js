import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDQky3wbwSmS9-LqzV8Er2SQWkKjahiRoA',
  authDomain: 'clothing-store-86894.firebaseapp.com',
  databaseURL: 'https://clothing-store-86894.firebaseio.com',
  projectId: 'clothing-store-86894',
  storageBucket: '',
  messagingSenderId: '1026819348460',
  appId: '1:1026819348460:web:512ba15bbe81ba5d'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
