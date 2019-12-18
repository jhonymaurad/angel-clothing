import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAUr_T_g8mUeR7MGyEl_doT4MpVxL1r4Vg',
  authDomain: 'angel-clothing-db.firebaseapp.com',
  databaseURL: 'https://angel-clothing-db.firebaseio.com',
  projectId: 'angel-clothing-db',
  storageBucket: 'angel-clothing-db.appspot.com',
  messagingSenderId: '781847034495',
  appId: '1:781847034495:web:8190f01a147f30bc7c9d4a',
  measurementId: 'G-2EY8VDXTSS'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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
      console.log('error crating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
