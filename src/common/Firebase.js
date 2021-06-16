import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

// Credenciales
const firebaseConfig = {
  apiKey: "AIzaSyCHgtiJMR92eNAonyh2k8WbqQtFQ3XYYwE",
  authDomain: "xiinbalkiin1.firebaseapp.com",
  projectId: "xiinbalkiin1",
  storageBucket: "xiinbalkiin1.appspot.com",
  messagingSenderId: "604538685051",
  appId: "1:604538685051:web:8c8e4fd535a64f9a4904de"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Instancia que nos permite manejar la base de datos
// de firestore
const db = firebase.firestore();
const storage = firebase.storage().ref();

export { db, storage };
