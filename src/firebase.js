import * as firebase from "firebase";
let database;
export const init = () => {
  const FIREBASE_PROPERTY = "list-todo-with-firebase";
  let config = {
    apiKey: "AIzaSyA297dSPusnVu2muDVSYM0qIAcKqmBbHks",
    authDomain: "list-todo-with-firebase.firebaseapp.com",
    databaseURL: "https://list-todo-with-firebase.firebaseio.com",
    projectId: "list-todo-with-firebase",
    storageBucket: "list-todo-with-firebase.appspot.com",
    messagingSenderId: "914920011182"
  };
  firebase.initializeApp(config);
  database = firebase.database();
  function writeUserData(userId, name, email, imageUrl) {
    firebase
      .database()
      .ref()
      .set({
        username: name,
        email: email,
        profile_picture: imageUrl
      });
  }
  function readdata() {
    firebase
      .database()
      .ref("listToDo")
      .once("value")
      .then(function(snapshot) {
        var username = snapshot.val() || "Anonymous";
        console.log(username);
      });
  }

  let todo = [{ tine: 1, check: true }, { tine: 1, check: true }];
  database
    .ref(`listToDo`)
    .set(todo)
    .then(res => {
      console.log("res", res);
    })
    .catch(error => {
      console.log("error", error);
    });

  readdata();
};
