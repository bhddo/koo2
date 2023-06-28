
//ADICIONE SEUS LINKS FIREBASE
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


  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout()
{
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location.replace("index.html");
}

