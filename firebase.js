// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD_tus_letras_raras_...",
  authDomain: "iujograma-ranking.firebaseapp.com",
  projectId: "iujograma-ranking",  <--- ¡ESTO ES LO QUE TE FALTA!
  storageBucket: "iujograma-ranking.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456:web:abcdef"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, query, orderBy, limit };