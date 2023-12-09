  /*const questions = [
    {
        question: "guess the character ",
        answers: [
            { text: "mliodas", correct: false },
            { text: "escanor", correct: false },
            { text: "ban", correct: true },
        ]
    },
    {
        question: "guess the character ",
        answers: [
            { text: "killua", correct: true },
            { text: "illumi", correct: false },
            { text: "gon", correct: false },
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById('nextbtn');
alert("cvvv");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}
alert("hmdlh");

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button1 = document.createElement("button1");
        button1.innerHTML = answer.text;
        button1.classList.add("btn");
        answerButtons.appendChild(button1);

    });
};
function resetState(){

    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
        
    }
}
alert("ki lebes e5dem");
startQuiz();*/
function verif(){
    n=document.getElementById("n").value;
    d=document.getElementById("d").value;
    e=document.getElementById("e").value;
    if (!alpha(n) || n == "") {
        alert("verify your name");
        return false;
      }

    if(e==""){
        alert("verify your email");
        return false;
    }

}
function alpha(ch) {
    chaine = "AZERTYUIOPQSDFGHJKLMWXCVBN";
    ch = ch.toUpperCase();
    for (i = 0; i < ch.length; i++) {
      if (chaine.indexOf(ch[i]) == -1) {
        return false;
      }
    }
    return true;
  }
function score(){
    score=0
    a=document.getElementById("correct1").checked;
    b=document.getElementById("correct2").checked;
    c=document.getElementById("correct3").checked;
    d=document.getElementById("correct4").checked;
    e=document.getElementById("correct5").checked;
    f=document.getElementById("correct6").checked;
    g=document.getElementById("correct7").checked;
    h=document.getElementById("correct8").checked;
    i=document.getElementById("correct9").checked;
    j=document.getElementById("correct10").checked;
    if(a){
        score++;
    }
    if(b){
        score++;
    }
    if(c){
        score++;
    }
    if(d){
        score++;
    }
    if(e){
        score++;
    }
    if(f){
        score++;
    }
    if(g){
        score++;
    }
    if(h){
        score++;
    }
    if(i){
        score++;
    }
    if(j){
        score++;
    }
    alert('your score is'+score);
    
}
