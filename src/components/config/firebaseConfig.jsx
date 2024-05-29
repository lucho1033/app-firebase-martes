import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCjSZ_d7fXxyHVxRntyt_55kX8w1lnQ6nI",
  authDomain: "app-firebase-martes-e28c4.firebaseapp.com",
  projectId: "app-firebase-martes-e28c4",
  storageBucket: "app-firebase-martes-e28c4.appspot.com",
  messagingSenderId: "395576631944",
  appId: "1:395576631944:web:45222e6e00bcb0b950753d"
};
const app = initializeApp(firebaseConfig);
export const initFirestore = getFirestore(app);
export const initStorage = getStorage(app);
