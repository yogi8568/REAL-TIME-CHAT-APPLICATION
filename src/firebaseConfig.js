import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAKWPOfnGBCqD76GR-c8qrxjKEFWHLeJ6U",
  authDomain: "yogi-d2f8a.firebaseapp.com",
  projectId: "yogi-d2f8a",
  storageBucket: "yogi-d2f8a.firebasestorage.app",
  messagingSenderId: "962389185678",
  appId: "1:962389185678:web:896f922ff27e9e4a72a5df",
  measurementId: "G-Y8LEJQX3WR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc, query, orderBy, onSnapshot, ref, uploadBytes, getDownloadURL };