import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCcxYeoDUx6_6iHP7l7ODO462k2h8JJUQ4",
  authDomain: "greysaucier.firebaseapp.com",
  databaseURL: "https://greysaucier.firebaseio.com",
  projectId: "greysaucier",
  storageBucket: "greysaucier.appspot.com",
  messagingSenderId: "886615914334",
}
  

const fire = firebase.initializeApp(config);
export default fire;
