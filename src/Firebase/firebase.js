// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // استيراد Firestore


// إعدادات Firebase الخاصة بك
const firebaseConfig = {
  apiKey: "AIzaSyBEFgiwisXuafd_-agRRLc8e2bOt1DfVzk",
  authDomain: "fir-react-4e58c.firebaseapp.com",
  projectId: "fir-react-4e58c",
  storageBucket: "fir-react-4e58c.appspot.com",
  messagingSenderId: "277228452802",
  appId: "1:277228452802:web:4f37be0fd95fff81e1f45b",
  measurementId: "G-Q7N37HYV2G"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

