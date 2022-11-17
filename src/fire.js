import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBso54O2yQR_VwNF3qi1ggCVC9Rq5vyfkk",
  authDomain: "mersedes-benz-project.firebaseapp.com",
  projectId: "mersedes-benz-project",
  storageBucket: "mersedes-benz-project.appspot.com",
  messagingSenderId: "917817775340",
  appId: "1:917817775340:web:355d0613574d1115d0c1c9",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
