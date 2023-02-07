// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
apiKey: "AIzaSyBrEQMEnVv7kPh9nqvJu-9Q5Ul7DG5rL7Y",
authDomain: "instaclone-9389d.firebaseapp.com",
projectId: "instaclone-9389d",
storageBucket: "instaclone-9389d.appspot.com",
messagingSenderId: "1029729226551",
appId: "1:1029729226551:web:a12df0794296fc5f3cd4b2",
measurementId: "G-80TXVS1QTC"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage}


//   export default db
