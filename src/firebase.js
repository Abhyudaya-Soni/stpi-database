import firebase from 'firebase/compat/app';
//import 'firebase/compat/database';
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBmhgMlEJqQ1mAKsUhB8bPQgCR2QMXC818",
    authDomain: "database-manager-67cd1.firebaseapp.com",
    databaseURL: "https://database-manager-67cd1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "database-manager-67cd1",
    storageBucket: "database-manager-67cd1.appspot.com",
    messagingSenderId: "443349217383",
    appId: "1:443349217383:web:8271601594c14b68e3a4c2",
    measurementId: "G-64WC4ML79N"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
