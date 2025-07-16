const questionText = document.getElementsByClassName("ques")[0];
const optionContainer = document.getElementsByClassName("options")[0];
var nextBtn = document.getElementById("next");
var submitBtn = document.getElementById("submit");

let randomObj = questions[Math.floor(Math.random() * questions.length)];
questionText.innerText = randomObj.question;
optionContainer.innerHTML = randomObj.options;

optionContainer.forEach(options => {
   var opt= document.createElement("button");
});

nextBtn.addEventListener('click',);
submitBtn.addEventListener('click',);