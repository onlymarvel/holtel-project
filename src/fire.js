
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD4EGP7tpzIu3ue7Ny9psN_C2Uf0Q5U3HQ",
  authDomain: "login-62fb1.firebaseapp.com",
  projectId: "login-62fb1",
  storageBucket: "login-62fb1.appspot.com",
  messagingSenderId: "239630525196",
  appId: "1:239630525196:web:98b64f0e483c50face5f29"
};

 const fire= firebase.initializeApp(firebaseConfig);

  export default fire;