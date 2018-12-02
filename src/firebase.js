
// init fire base
import * as firebase from "firebase";

export const init = () => {
  let config = {
    apiKey: "AIzaSyA297dSPusnVu2muDVSYM0qIAcKqmBbHks",
    authDomain: "list-todo-with-firebase.firebaseapp.com",
    databaseURL: "https://list-todo-with-firebase.firebaseio.com",
    projectId: "list-todo-with-firebase",
    storageBucket: "list-todo-with-firebase.appspot.com",
    messagingSenderId: "914920011182"
  };
  firebase.initializeApp(config);
  return firebase.database();
};
