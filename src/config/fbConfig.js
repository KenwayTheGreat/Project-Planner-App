import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBNzd3MBJzKSuvZBbmV734Q0IBDbXHjz08",
  authDomain: "marioplan-219c3.firebaseapp.com",
  databaseURL: "https://marioplan-219c3.firebaseio.com",
  projectId: "marioplan-219c3",
  storageBucket: "marioplan-219c3.appspot.com",
  messagingSenderId: "143849856377",
  appId: "1:143849856377:web:327a3c7f1ab3d1b813e3a8",
  measurementId: "G-3VP2F211G8",
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.analytics();

export default firebase;
