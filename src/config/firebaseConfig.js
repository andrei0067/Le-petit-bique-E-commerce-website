import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

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

export const auth = getAuth(app)
