// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:import.meta.env.VITE_apiKey,
  // authDomain:import.meta.env.VITE_authDomain,
  // projectId:import.meta.env.VITE_projectId,
  // storageBucket:import.meta.env.VITE_storageBucket,
  // messagingSenderId:import.meta.env.VITE_messagingSenderId,
  // appId:import.meta.env.VITE_appId,
  apiKey: "AIzaSyDaSrUDyLSDpAUqQNT8mp1wlTTnJq3ay6s",
  authDomain: "cars-doctore-5f961.firebaseapp.com",
  projectId: "cars-doctore-5f961",
  storageBucket: "cars-doctore-5f961.appspot.com",
  messagingSenderId: "126643938597",
  appId: "1:126643938597:web:bae1cfb60010b82cf966cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;