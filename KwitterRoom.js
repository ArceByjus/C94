var firebaseConfig = {
  apiKey: "AIzaSyDEt12sng8W1M71YMvbtcRw6frWZfomd1Q",
  authDomain: "proyectok-2b513.firebaseapp.com",
  databaseURL: "https://proyectok-2b513-default-rtdb.firebaseio.com",
  projectId: "proyectok-2b513",
  storageBucket: "proyectok-2b513.appspot.com",
  messagingSenderId: "455336755837",
  appId: "1:455336755837:web:d1e92a6b9c1aa715b1a714"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//AÑADE TUS ENLACES DE FIREBASE

    user_name = localStorage.getItem("user_name");
    document.getElementById("hola").innerHTML="Hola "+user_name;

  console.log("Hola   rrrr "+user_name);
  
  function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("room_name", room_name);
   window.location = "Kwitter_page.html"; 
  }