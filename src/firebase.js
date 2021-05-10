import firebase from 'firebase';
import 'firebase/firestore';



 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDfETHtLwbbmhNplCC3Nf5601EEnhgxw8c",
    authDomain: "todoist-4394c.firebaseapp.com",
    projectId: "todoist-4394c",
    storageBucket: "todoist-4394c.appspot.com",
    messagingSenderId: "290378559384",
    appId: "1:290378559384:web:4701926ee077d3dd6785ed"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export { firebaseApp as firebase}