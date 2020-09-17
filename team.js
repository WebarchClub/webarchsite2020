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

const db = firebase.firestore();

db.collection("team")
  .orderBy("order")
  .get()
  .then(snap => {
    snap.docs.forEach(doc => {
      let person = {
        Name: doc.data().name,
        Role: doc.data().role,
        photo: doc.data().photo,
        lnkdn: doc.data().fb,
        insta: doc.data().insta,
        git: doc.data().git
      };

      var div1 = document.createElement("div");
      div1.className = "Team-members py-5 shadow";
      div1.innerHTML = `<div class="Team-members py-2">
      <div class="Image py-2">
        <img src="${person.photo}" />
      </div>
      <div class="Info">
        <h5 class="name text-center mt-2">${person.Name}</h5>
        <p class="role text-center">${person.Role}</p>
      </div>
      <div class="memebers-social-icons">
        <ul class="Social-Icon">
          <li>
            <a
              href="${person.insta}"
              target="_blank"
              ><i class="fab fa-instagram fa-2x"></i
            ></a>
          </li>
          <li>
            <a
              href="${person.git}"
              target="_blank"
              ><i class="fab fa-github fa-2x"></i
            ></a>
          </li>
          <li>
            <a
              href="${person.lnkdn}"
              target="_blank"
              ><i class="fab fa-linkedin fa-2x"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>`;
      document.querySelector(".Team-content").appendChild(div1);
    });
  });

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
