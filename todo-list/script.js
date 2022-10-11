// selectors | Reference
var todoInput = document.querySelector(".todo-input");
var todoInputTime = document.querySelector("#time");
var btn = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");
var Header = document.querySelector(".Day");

// Gettng date and day from Date()

var today = new Date();

const options ={
    weekday:"long",
    day:"numeric",
    month:"long"
};
const day = today.toLocaleDateString("en-US",options);
Header.innerHTML = day;


// Event Handlers
btn.onclick = create;
todoList.onclick = performAction;

var data;
// Functions
function create(e) {

  e.preventDefault();
  data = todoInput.value;
  const time  = todoInputTime.value;   // Time

  console.log(data);
  console.log(time);
  
  data = data.trim();

  if (data != "") {
    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");

    var timeBtn = document.createElement("li");
    timeBtn.classList.add("todo-item");
    timeBtn.innerText=time;
    newDiv.appendChild(timeBtn);

    var newLi = document.createElement("li");
    newLi.classList.add("todo-item");
    newLi.innerText = data ;
    newDiv.appendChild(newLi);




    var cmpltBtn = document.createElement("button");
    cmpltBtn.classList.add("cmpltBtn");
    cmpltBtn.innerHTML = '<i class="fa fa-check " aria-hidden="true"></i>';
    newDiv.appendChild(cmpltBtn);

    var deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    newDiv.appendChild(deleteBtn);

    todoList.appendChild(newDiv);
    todoInput.value = "";
    todoInputTime.value="";
  } else {
    alert("Box can not be blank");
  }
}

function performAction(e) {
  var item = e.target;
  // console.log(item);

  if (item.classList[0] == "cmpltBtn") {
    // console.log("Cmplete Button pressed");
    var parent = item.parentElement;
    parent.classList.toggle("todo-done");
  }
  if (item.classList[0] == "deleteBtn") {
    var parent = item.parentElement;
    // console.log(parent);
    parent.remove();
  }
}