import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDPWIKKusmuCpurvI0nCTJwCk2SuCjOOhs",

  authDomain: "noun-769cf.firebaseapp.com",

  projectId: "noun-769cf",

  storageBucket: "noun-769cf.appspot.com",

  messagingSenderId: "903697476087",

  appId: "1:903697476087:web:072c8bbc543cfb0f96e6f2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
