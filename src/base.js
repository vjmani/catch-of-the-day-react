import Rebase from "re-base";
import firebase from "firebase/app";
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAPQRaDu42iFL5Hr0hd_dQo2qP3_VB4lKg",
    authDomain: "catch-of-the-day-vj.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-vj.firebaseio.com",
    projectId: "catch-of-the-day-vj",
    storageBucket: "catch-of-the-day-vj.appspot.com",
    messagingSenderId: "170590098148",
    appId: "1:170590098148:web:120ff6e4ab1733cc20d2f1",
    measurementId: "G-GNL0V0PVL9"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
