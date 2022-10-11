// Questions will be asked
// score to be added and ui should be improved


const Questions = [{

    id: 0,
    q: "Program you're participating right now??",
    a: [{ text: "GirlScript summer of code", isCorrect: false },
        { text: "GSOC", isCorrect: false },
        { text: "Hactoberfest 2022", isCorrect: true },
        { text: "SSOC", isCorrect: false }
    ]

},
{
    id: 1,
    q: "World’s second highest mountain peak?",
    a: [{ text: "Lampang", isCorrect: false, isSelected: false },
        { text: "Chantal Mauduit", isCorrect: false },
        { text: "Junko Tabei", isCorrect: false },
        { text: "Wanda Rutkiewicz", isCorrect: true }
    ]

},
{
    id: 2,
    q: "What is the capital of Gujarat",
    a: [{ text: "Surat", isCorrect: false },
        { text: "Vadodara", isCorrect: false },
        { text: "Gandhinagar", isCorrect: true },
        { text: "Rajkot", isCorrect: false }
    ]

},

{
    id: 3,
    q: "Which is 2nd highest mountain peak?",
    a: [{ text: "Himadri", isCorrect: false },
        { text: "Mount Everest", isCorrect: false },
        { text: "K2", isCorrect: true },
        { text: "Kailash Parvat", isCorrect: false }
    ]

},

{
    id: 4,
    q: "Who is chief minister of Goa?",
    a: [{ text: "Pramod Sawant", isCorrect: true },
        { text: "Dayanand Bandodkar", isCorrect: false },
        { text: "Ravi Naik", isCorrect: false },
        { text: "Manohar Parrikar", isCorrect: false }
    ]

},
{
    id: 5,
    q: "Which country won Asia Cup 2022?",
    a: [{ text: "India", isCorrect: false },
        { text: "Sri Lanka", isCorrect: true },
        { text: "Nepal", isCorrect: false },
        { text: "Pakistan", isCorrect: false }
    ]

},
{
    id: 6,
    q: "Largest Hindu Temple in India?",
    a: [{ text: "Srirangam Temple", isCorrect: true },
        { text: "Akshardham Temple", isCorrect: false },
        { text: "Pashupatinath", isCorrect: false },
        { text: "Raghunath Temple", isCorrect: false }
    ]

},

]


var start = true;


function iterate(id) {


var result = document.getElementsByClassName("result");
result[0].innerText = "";


const question = document.getElementById("question");



question.innerText = Questions[id].q;


const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');



op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;


op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";


op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})


op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})


op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})


op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})


const evaluate = document.getElementsByClassName("evaluate");
// int count=0 ;

evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        // count++;

        result[0].innerHTML = "True";
        result[0].style.color = "green";

    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// var win = 0;
// var lose = 0;


// function win(){
//   win = win + 1;
// };

// function lose (){
//  lose = lose + 1
// };


const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 5) {
    id++;
    iterate(id);
    console.log(id);
}

})