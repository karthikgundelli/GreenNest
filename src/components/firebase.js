import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDW45Dx_KJViHAyYIAlptH4o_hp6vt5prI",
  authDomain: "roomradar-86278.firebaseapp.com",
  projectId: "roomradar-86278",
  storageBucket: "roomradar-86278.appspot.com",
  messagingSenderId: "943125064217",
  appId: "1:943125064217:web:b86bb31721805b8c76d888",
  measurementId: "G-0MY0PZCGYE"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
