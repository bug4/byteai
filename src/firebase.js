import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "A1ZaSyDU8MtxodQSU8S8BQHYSBi3atkAJtVLugY",
  authDomain: "chat-4dc5d.firebaseapp.com",
  databaseURL: "https://chat-4dc5d-default-rtdb.firebaseio.io",
  projectId: "chat-4dc5d",
  storageBucket: "chat-4dc5d.firebasestorage.app",
  messagingSenderId: "15233733934",
  appId: "1:15233733934:web:92d77ece1c054e87a032d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);