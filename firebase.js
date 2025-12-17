// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDsfnjWOIfvHrGbGBHjbbutlNGwlQFohYw",
  authDomain: "iujograma.firebaseapp.com",
  projectId: "iujograma",
  storageBucket: "iujograma.firebasestorage.app",
  messagingSenderId: "249985588856",
  appId: "1:249985588856:web:f7e1fdd96cd0af2a8c978d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, query, orderBy, limit };