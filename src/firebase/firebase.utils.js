import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDW_Nd2BLKCz-hCyOwTfBc772cmZiEWPtU",
    authDomain: "crwn-clothing-f7f32.firebaseapp.com",
    databaseURL: "https://crwn-clothing-f7f32.firebaseio.com",
    projectId: "crwn-clothing-f7f32",
    storageBucket: "crwn-clothing-f7f32.appspot.com",
    messagingSenderId: "1038301844192",
    appId: "1:1038301844192:web:3e8aca9224d3b49cbdb685",
    measurementId: "G-7HWZ74RWH9"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
