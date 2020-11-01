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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user:', error.message);
    }
  }

  return userRef;
}



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
