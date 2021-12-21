// Local Time Module

GetTime();

function GetTime(){
  var CurrentTime = new Date()
  var hour = CurrentTime.getHours()
  var minute = CurrentTime.getMinutes()
  var second = CurrentTime.getSeconds()

  if(minute < 10){
    minute = "0" + minute
  }

  if(second < 10){
    second = "0" + second
  }

  var GetCurrentTime = hour + ":" + minute + ":" + second;

  document.getElementById("localTime").innerHTML = GetCurrentTime;
  setTimeout(GetTime,1000)
}

// User's name and List type Module

window.addEventListener('load', () => {

    const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const type = params.get('type');

    document.getElementById('outputName').innerHTML = "Welcome, " + name;
    document.getElementById('listType').innerHTML = type;

})

// // Remove Item Module
//
// var close = document.getElementsByClassName("remove");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }
//
// // Create a new list item when clicking on the "Add" button
// function addTask() {
//   var li = document.createElement("input");
//   var inputValue = document.getElementById("addTask").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("list-group").appendChild(li);
//   }
//   document.getElementById("addTask").value = "";
//
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);
//
//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  span.className = "remove btn btn-danger";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("remove btn btn-danger");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.setAttribute("checkbox", "text");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please add an item");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("Button");
  var txt = document.createTextNode("\u00D7");
  span.className = "remove btn btn-danger";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
