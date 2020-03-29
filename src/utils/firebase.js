import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBYNQXBXYEG9NJeqyLWyM43pW05NTSWk6k",
  authDomain: "fellrace-finder-firebase.firebaseapp.com",
  databaseURL: "https://fellrace-finder-firebase.firebaseio.com",
  projectId: "fellrace-finder-firebase",
  storageBucket: "fellrace-finder-firebase.appspot.com",
  messagingSenderId: "692653450207",
  appId: "1:692653450207:web:184102062e250c3439da6a",
  measurementId: "G-LQ5FZYHYN6"
};

firebase.initializeApp(config);

export default firebase;
