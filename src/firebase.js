import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDqEm6d5CgGw_mLBifQr29T14Y9qGTFNkg",
  authDomain: "netflix-build-d3ed1.firebaseapp.com",
  projectId: "netflix-build-d3ed1",
  storageBucket: "netflix-build-d3ed1.appspot.com",
  messagingSenderId: "348204037091",
  appId: "1:348204037091:web:7af19707fe5c9ead6b26d6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
