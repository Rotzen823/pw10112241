import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Comienza FireBase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAubfFJL4fQvYy0uQW0OMC1cY5PfIesqO0",
  authDomain: "progweb-bc352.firebaseapp.com",
  projectId: "progweb-bc352",
  storageBucket: "progweb-bc352.appspot.com",
  messagingSenderId: "782430281519",
  appId: "1:782430281519:web:684caa13df775dae4dcbda"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//Termina FireBase

const app = createApp(App)

app.use(router)

app.mount('#app')
