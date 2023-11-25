
var firebaseConfig = {
  apiKey: "AIzaSyAGnEqXT8HQEAHJu3OVyu-kGGGhOsGOTM8",
  authDomain: "todolist2024-46559.firebaseapp.com",
  databaseURL: "https://todolist2024-46559-default-rtdb.firebaseio.com",
  projectId: "todolist2024-46559",
  storageBucket: "todolist2024-46559.appspot.com",
  messagingSenderId: "823006332595",
  appId: "1:823006332595:web:8d96ce2703e80c6b56d2c6"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
console.log(app.database);

// -------------------data base---------------------------------


firebase.database().ref('todos').on('child_added',function(data){
      
       
         // ***************************Create list*********************************
       
         var liElement = document.createElement("li");
       
         var liText = document.createTextNode(data.val().value);
       
         liElement.appendChild(liText);
       
         // ***********************Delete button**********************************
       
         var delbtn = document.createElement("button");
       
         var delbtnText = document.createTextNode("Delete");
         delbtn.setAttribute("class","delBtn")
       
         delbtn.appendChild(delbtnText);
       
         delbtn.setAttribute("onclick", "deleteItem(this)");
       
         liElement.appendChild(delbtn);
       
         // ***********************Edit button**********************************
       
         var editbtn = document.createElement("button");
       
         var editbtnText = document.createTextNode("Edit");
         editbtn.setAttribute("class","editBtn")
       
         editbtn.appendChild(editbtnText);
       
         liElement.appendChild(editbtn);
     
       
         editbtn.setAttribute("onclick", "editItem(this)");
       
         var list = document.getElementById("list");
       
         list.appendChild(liElement);
       
         console.log(liElement);
       
         input.value = "";

})

// ------------------------------INPUT FEILD----------------------------------

function addtodo() {
    var input = document.getElementById("inputField");

    //  console.log(input.value);-------------------------------------------

    var database = firebase.database().ref('todos')
    var key = database.push().key;
   
    var todo = {
     value: inputField.value,
     key:key
    }
    database.child(key).set(todo)
  }
  
  function deleteAll() {
    var list = document.getElementById("list");
    list.innerHTML = "";
  }
  
  function deleteItem(x) {
    console.log(x.parentNode.remove());
  }
  
  function editItem(e) {
    var input = prompt("Enter updated value...");
  
    e.parentNode.firstChild.nodeValue = input;
  }



















