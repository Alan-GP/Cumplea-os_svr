const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBzM-DJH_cUgH0cpNTS6F2KcOUIcLGpF7E",
  authDomain: "festejos-ce5cb.firebaseapp.com",
  databaseURL: "https://festejos-ce5cb-default-rtdb.firebaseio.com",
  projectId: "festejos-ce5cb",
  storageBucket: "festejos-ce5cb.appspot.com",
  messagingSenderId: "533277493467",
  appId: "1:533277493467:web:e8e1978c1376d886e364fe",
  measurementId: "G-7PXDXMB3LL"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Firestore

const auth = getAuth(app);
const db = getFirestore(app);

module.exports = { app, auth, db };
