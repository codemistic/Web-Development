const quizData=[
         {
            question: 'what is the age of Aryan?',
            a: '18',
            b: '20',
            c: '21',
            d: '19',
            correct: 'b'
         },{
             question:'What is the most used programming language?',
             a: 'Java',
             b: 'C',
             c: 'Python',
             d: 'Javascript',
             correct: 'd'
         },{
            question:'What is 3 the most used programming language?',
            a: 'Java',
            b: 'C',
            c: 'Python',
            d: 'Javascript',
            correct: 'd'
        },{
            question:'What is 4 the most used programming language?',
            a: 'Java',
            b: 'C',
            c: 'Python',
            d: 'Javascript',
            correct: 'd'
        },{
            question:'What is  5the most used programming language?',
            a: 'Java',
            b: 'C',
            c: 'Python',
            d: 'Javascript',
            correct: 'd'
        },
]


const answerEls= document.querySelectorAll('.answer');
const questionEl= document.getElementById("question")
const a_text= document.getElementById("a_text")
const b_text= document.getElementById("b_text")
const c_text= document.getElementById("c_text")
const d_text= document.getElementById("d_text")
const submitBtn= document.getElementById("submit")
const quiz=document.getElementById("quiz")


let currentQuiz=0;
let score=0;


loadQuiz();




function  loadQuiz(){

  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerHTML= currentQuizData.question;

  a_text.innerText=currentQuizData.a;
  b_text.innerText=currentQuizData.b;
  c_text.innerText=currentQuizData.c;
  d_text.innerText=currentQuizData.d;


}


function getSelected(){
    
    let answer=undefined;

    answerEls.forEach((answerEl) =>{
         if(answerEl.checked){
             answer=answerEl.id;
         }
    });
    
    return answer;
}




function deselectAnswers(){
  answerEls.forEach((answerEl) =>{
  answerEl.checked=false;
  });
}

//checked property check whether the any option is checked from the array or not
//The checked property returns true if the radio button is selected and false otherwise 
// value option selects whether the answer is getting checked or not
submitBtn.addEventListener('click',()=>{
    
   //check to see the answer
  const answer=getSelected();

  console.log(answer)  
   
    if(answer){
      if(answer===quizData[currentQuiz].correct){

        score++;
    }
    
      currentQuiz++; 
      if(currentQuiz < quizData.length){
        loadQuiz();
      }else{
       
         quiz.innerHTML=`<h2> You answered ${score}/${quizData.length} questions correctly
                          <button onclick="location.reload()">Waste your time again</button>`
      }
       
    } 
     
});
 