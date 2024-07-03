import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDZ4QjUydzzAX85TVYfhzj2XhfW4DxsXag",
    authDomain: "vidasana-a5269.firebaseapp.com",
    projectId: "vidasana-a5269",
    storageBucket: "vidasana-a5269.appspot.com",
    messagingSenderId: "522835223097",
    appId: "1:522835223097:web:82444735e7bf933634e3e8"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export const auth = firebase.auth();
