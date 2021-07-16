import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDHQazC7PH2BLsCk_VN5LcmNTt6TzQJ8ao",
  authDomain: "clone-de7cb.firebaseapp.com",
  projectId: "clone-de7cb",
  storageBucket: "clone-de7cb.appspot.com",
  messagingSenderId: "961055703190",
  appId: "1:961055703190:web:b1d3593aa6b835460a02b7",
  measurementId: "G-1RGH39W8DP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
