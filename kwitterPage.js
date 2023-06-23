//LINKS FIREBASE
const firebaseConfig = {
      apiKey: "AIzaSyDxItiUpXVoSnbjsG0-Bq_vDkJkOOH1gr4",
      authDomain: "koo256-b57e3.firebaseapp.com",
      databaseURL: "https://koo256-b57e3-default-rtdb.firebaseio.com",
      projectId: "koo256-b57e3",
      storageBucket: "koo256-b57e3.appspot.com",
      messagingSenderId: "101767735015",
      appId: "1:101767735015:web:8b9fd2eade57dc5faee442"
    };

    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("userName");
roomName = localStorage.getItem("roomName");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(roomName).push({
            name:userName,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código
console.log(firebaseMessageId);
console.log(messageData);
name = messageData['name'];
message = messageData['message'];
like = messageData['like'];
nameWithTag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebaseMessageId+" value="+like+" onclick='updateLike(this.id)'>";
spanWithTag = "<span class-'glyphicon glyphicon-thumbs-up'>like: "+ like +"</span></button><hr>";

row = nameWithTag + messageWithTag = like_button + spanWithTag;
document.getElementById("output").innerHTML += row;
//Fim do código
 } });  }); }
getData();

function updateLike(messageId)
{
      console.log("botão de like pressionado - " + messageId);
      buttonId =  messageId;
      likes = document.getElementById(buttonId).value;
      updateLikes = Number(likes) + 1;
      console.log(updateLikes);

      firebase.database().ref(roomName).child(messageId).update({
            like : updateLikes
      });     
}

function logout()
{
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location.replace("index.html");
}