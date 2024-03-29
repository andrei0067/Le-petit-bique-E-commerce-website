import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
import {getStorage} from "firebase/storage"

export const firebaseConfig = {
    apiKey: "AIzaSyD95PtaeF6c8Tc-txjmUOtfNJ0NacVF4Ow",
    authDomain: "le-petit-bique.firebaseapp.com",
    projectId: "le-petit-bique",
    storageBucket: "le-petit-bique.appspot.com",
    messagingSenderId: "686446976655",
    appId: "1:686446976655:web:9978477b11f10425065afa",
    measurementId: "${config.measurementId}"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
