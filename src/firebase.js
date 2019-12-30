import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyB1BKWYsOcht630wq1yH2yyJ_pFKWxIuW0",
    authDomain: "todo-app-534dd.firebaseapp.com",
    databaseURL: "https://todo-app-534dd.firebaseio.com",
    projectId: "todo-app-534dd",
    storageBucket: "todo-app-534dd.appspot.com",
    messagingSenderId: "105396081347",
    appId: "1:105396081347:web:60d23eba41b11f1d0c0876",
})

export { firebaseConfig as firebase };