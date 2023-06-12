import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAivMgSWj_mahUMduCD2yJ3QEBgm4F2MCw",
  authDomain: "netflix-clone-a1920.firebaseapp.com",
  projectId: "netflix-clone-a1920",
  storageBucket: "netflix-clone-a1920.appspot.com",
  messagingSenderId: "337238148950",
  appId: "1:337238148950:web:440bb6236d24b50c0078f7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Auth
// export const db = firebase.firestore();
export const auth = firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signinWithGoogle = () => auth.signInWithPopup(googleProvider);