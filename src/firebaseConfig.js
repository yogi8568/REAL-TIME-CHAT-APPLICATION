import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "Your_api-key",
  authDomain: "Your_auth_domain",
  projectId: "Your_project_ID",
  storageBucket: "Your_storage_bucket",
  messagingSenderId: "Your_messaging_sender_id",
  appId: "Your_app_id",
  measurementId: "Your_measurment_id"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc, query, orderBy, onSnapshot, ref, uploadBytes, getDownloadURL };
