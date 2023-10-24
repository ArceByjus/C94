function inicioSesion(){
    user_name = document.getElementById("User_name").value;
    console.log(user_name);
    localStorage.setItem("user_name", user_name);
    window.location = "Kwitter-room.html";
}