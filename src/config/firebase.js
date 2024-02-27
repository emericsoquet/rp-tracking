import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDjM6Zd5ByxXYu7HUFYQAieAb0dA7zVCgY",
    authDomain: "rp-tracking-1007.firebaseapp.com",
    projectId: "rp-tracking-1007",
    storageBucket: "rp-tracking-1007.appspot.com",
    messagingSenderId: "669536737964",
    appId: "1:669536737964:web:5ec0cfde201d7271959d09"
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

onAuthStateChanged(auth, user => {
    if(user !== null)
        console.log('Logged in!');
    else
        console.log('No user');
})