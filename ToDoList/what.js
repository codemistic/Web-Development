let today = new Date();
var date = today.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
});
var day = today.toLocaleString("en-GB", {weekday: "long"});
var dat = document.getElementById("date");
var da = document.getElementById("day");
dat.textContent = "Date:   " + date;
da.textContent = "Day:   " + day;
document.getElementById("addtasky").addEventListener("click", addtask);
document.getElementById("savetask").addEventListener("click", saveTask);
function addtask() {
    document.querySelector(".inputs").style.display = "flex";
}
function saveTask() {
    const name = document.getElementById("taskname").value;
    const deadline = document.getElementById("deadline").value;
    if (!name.trim()) {
        alert("Please enter a task name.");
        return;
    }
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.style.marginTop = "10px";
    const taskText = document.createElement("p");
    taskText.textContent = name + " (Due: " + deadline + ")";
    taskText.style.fontSize = "20px";
    const buttonsDiv = document.createElement("div");
    buttonsDiv.style.marginTop = "5px";
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔️";
    completeBtn.onclick = () => {
        taskText.style.textDecoration = "line-through";
    };
    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.onclick = () => {
        document.getElementById("taskname").value = name;
        document.getElementById("deadline").value = deadline;
        document.querySelector(".inputs").style.display = "flex";
        taskDiv.remove();
    };
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.onclick = () => taskDiv.remove();
    buttonsDiv.appendChild(completeBtn);
    buttonsDiv.appendChild(editBtn);
    buttonsDiv.appendChild(deleteBtn);
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(buttonsDiv);
    document.getElementById("contents").appendChild(taskDiv);
    document.querySelector(".inputs").style.display = "none";
    document.getElementById("taskname").value = "";
    document.getElementById("deadline").value = "";
}
