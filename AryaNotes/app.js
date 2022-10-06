showNotes();
// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date = new Date();
    let hours = date.getHours();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getYear();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let dayName = days[date.getDay()];
    let time = `Note Created On ${day}.0${month + 1}.${year - 100} (${dayName}) At Time ${hours}:${minutes}:${seconds}.`
    let addTxt = document.getElementById("addTxt");
    let title = document.getElementById("title");
    let radio1 = document.getElementById("radio1");
    let radio2 = document.getElementById("radio2");
    let notes = localStorage.getItem("notes");
    let displayedTxt = `Nothing To Show! Use "Add Your Note" Section Above To Add Your Notes.`;
    if (notes == null) {
        notesObj = [];//notesObj is array of objects
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: title.value,
        text: addTxt.value,
        radio1: radio1.checked,
        radio2: radio2.checked,
        time: time,
        txt: displayedTxt
    };
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    title.value = "";
    showNotes();
});

// Function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        if (element.radio1) {
            html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <h6 class="card-text text-center my-3" style="color:rgb(0,220,0);font-weight:700;font-size:18px">Important Note</h6>
                    <p class="card-text">${element.text}</p>
                    <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-danger">Delete This Note</button>
                    <h6 class="card-text text-center my-3">${element.time}</h6>
                </div>
            </div>`;
        }
        else if (element.radio2) {
            html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <h6 class="card-text text-center my-3" style="color:red;font-weight:700;font-size:18px">Unimportant Note</h6>
                    <p class="card-text">${element.text}</p>
                    <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-danger">Delete This Note</button>
                    <h6 class="card-text text-center my-3">${element.time}</h6>
                </div>
            </div>`;
        }
        else {
            html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <h6 class="card-text text-center my-3" style="font-weight:700;font-size:18px">Note</h6>
                    <p class="card-text">${element.text}</p>
                    <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-danger">Delete This Note</button>
                    <h6 class="card-text text-center my-3">${element.time}</h6>
                </div>
            </div>`;
        }
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing To Show! Use "Add Your Note" Section Above To Add Your Notes.`;
    }
}

// Function to delete a note
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);//to remove a note from array
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

//searching for notes
let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {
    let inputVal = search.value;
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardT = element.getElementsByTagName("p");
        let cardTxt = Array.from(cardT);
        cardTxt.forEach(function (elem) {
            let searchTxt = elem.innerText;
            if (searchTxt.includes(inputVal)) {
                element.style.display = "block";
            }
            else {
                element.style.display = "none";
            }
        });
    });
});