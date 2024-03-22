import { firebase, initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

if (firebase.apps.length == 0){
    firebase.initializeApp(firebaseConfig);
}

const database = getDatabase();
export default database;


