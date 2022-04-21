import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDfoHskl-HmoC6Q9opnMFGqE9KKHoEBbuM",
    authDomain: "todo-list-219c2.firebaseapp.com",
    databaseURL: "https://todo-list-219c2-default-rtdb.firebaseio.com",
    projectId: "todo-list-219c2",
    storageBucket: "todo-list-219c2.appspot.com",
    messagingSenderId: "470682678408",
    appId: "1:470682678408:web:4c231df840e57b5f601b3d",
    measurementId: "G-Q1Y7C2JLBH"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);