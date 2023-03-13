import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCvmCDm6rJELSAkLXB4WZhBhyu9L8IV4qM",
    authDomain: "yonwi-f96dd.firebaseapp.com",
    projectId: "yonwi-f96dd",
    storageBucket: "yonwi-f96dd.appspot.com",
    messagingSenderId: "682204614294",
    appId: "1:682204614294:web:184c6f1eda05d316877cb7",
    measurementId: "G-KT80HBBW8K"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { auth, db, storage, analytics };

