// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBhMZHWgQNpa0uSFRwxtJfd2WJqdxz-KOY",
  authDomain: "webarchsite2020.firebaseapp.com",
  databaseURL: "https://webarchsite2020.firebaseio.com",
  projectId: "webarchsite2020",
  storageBucket: "webarchsite2020.appspot.com",
  messagingSenderId: "511347193092",
  appId: "1:511347193092:web:5596d70be160351270cc51",
  measurementId: "G-CXT293D67X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

// form
const form = document.querySelector("#ping");
form.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  db.collection("contact").add({
    email: email,
    message: message,
    name: name
  });
  alert("Webarch has received your message");
});
