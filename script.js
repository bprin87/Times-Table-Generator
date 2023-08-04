// displays tally
let totalQuestions = document.querySelector('.total-questions');
let correctAnswers = document.querySelector('.correct-answers')
let scorePercentage = document.querySelector('.score-percentage');

// keeps score, storing the amount of questions asked and correct answers inside the tally
let totalQuestionsArray = [];
let correctAnswersArray = [];

// displays randomly text in header
let sum = document.querySelector('.sum');
let message = document.querySelector('.question');
let correction = document.querySelector('.question');

let input = document.querySelector('.user-answer');

// submit answer button
let btn = document.querySelector('.btn');

// function to keep the input hidden until the user clicks start
function displayInput() {
    if (input.classList.contains('btn')) {
        input.classList.remove('btn');
    } else {
        input.classList.add('btn');
    }
}

// function to display a well done message before moving to the next question
function wellDone() {
    
    sum.classList.add('hide-sum');
    let wellDoneMessage = document.createElement('h3');
    message.append(wellDoneMessage);
    wellDoneMessage.innerText = 'Correct. Well Done!';

    // removes the message after short time
    setTimeout(function () {
      wellDoneMessage.remove();
      sum.classList.remove('hide-sum');
    }, 2000);
    displayInput();
   
}

// function to display the correct answer before moving to the next question
function incorrect() {
    
    sum.classList.add('hide-sum');
    let h3 = document.createElement('h3');
    correction.append(h3);
    h3.innerText = 'Incorrect. The correct answer is : ' + sum.correctAnswer;

    // removes the correct answer after short time
    setTimeout(function () {
        h3.remove();
        sum.classList.remove('hide-sum');
      }, 4000);
      displayInput();
}

btn.addEventListener('click', displayInput);


// button to generate random sum
btn.addEventListener('click', function() {

    // changes the button's text when user clicks start
    btn.innerText = 'Submit Answer';
    
    // generates random numbers between 1 and 10
    let firstNumber = Math.floor(Math.random() * 11);
    let secondNumber = Math.floor(Math.random() * 11);

    // displays the sum inside html
    sum.innerText = firstNumber + ' x ' + secondNumber + ' = ?';

    // stores the result of the sum
    let result = firstNumber * secondNumber;
    sum.correctAnswer = result;

});


// function to submit the user's answer
function userAnswer() {

    // gets the value of the user input
    let inputValue = document.querySelector('.user-answer').value;

    // gets the current random sum displaued
    let currentRandomSum = sum.innerText;

    if (inputValue === sum.correctAnswer.toString()) {
       
        wellDone();

        // pushes the total questions/answers to the empty arrays
        totalQuestionsArray.push(currentRandomSum);
        correctAnswersArray.push(currentRandomSum);
        
    } else {
        
        incorrect();

        totalQuestionsArray.push(currentRandomSum);
    }
    
    // clears the input field
    document.querySelector('.user-answer').value = '';

    // updates the sidebar tally with current scores
    totalQuestions.innerText = totalQuestionsArray.length;
    correctAnswers.innerText = correctAnswersArray.length;
    let percentage = (correctAnswersArray.length / totalQuestionsArray.length) * 100;
    let toOneDecimal = percentage.toFixed(0);
    scorePercentage.innerText = toOneDecimal + '%';

}