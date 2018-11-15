import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC1IUSGLcIK71KdJzuK6iSN6FbYUn7VkZ0",
  authDomain: "testing-4dbfc.firebaseapp.com",
  databaseURL: "https://testing-4dbfc.firebaseio.com",
  projectId: "testing-4dbfc",
  storageBucket: "testing-4dbfc.appspot.com",
  messagingSenderId: "691791321968"
};

export const Firebase = firebase.initializeApp(firebaseConfig);
