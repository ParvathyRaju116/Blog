import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"
import {GoogleAuthProvider, getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfAqUGtZ15_hAGGTnOzMS7jIo_hMlw_BI",
  authDomain: "blog-project-6d809.firebaseapp.com",
  projectId: "blog-project-6d809",
  storageBucket: "blog-project-6d809.appspot.com",
  messagingSenderId: "123346065487",
  appId: "1:123346065487:web:95b95726a5a62406d7f23a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)
export const auth=getAuth(app)
export const provider = new GoogleAuthProvider()