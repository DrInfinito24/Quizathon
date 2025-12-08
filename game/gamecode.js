/**
 * Initialises the variables used for the game
 */
let currentQuestion;
let askedQuestions = [null];
let questionIndex;
let potentialQustionIndex
let score = 0
let lives = 3;
let dialogueIndex = -1
let avatarNumber;
let time;
let timeRemaining = 10;
let answered = false;
let currentState = "Intro";
let playerName;
let previousQuestionIndex = null;


/**
 * Gets the DOM elements to manipulated by this JS file.
 */

const contestantName = document.getElementById("contestant_name")
const contestantAvatar = document.getElementById("contestant_img")
const currentScore = document.getElementById("score_count")
const hostImage = document.getElementById("host_image")
const hostDialogueImg = document.getElementById("dialogue_box")
const hostDialogueText = document.getElementById("host_dialogue")
const questionDisplay = document.getElementById("questionDisplay");
const answerOptions = document.getElementsByName("answer-btn");
const questionImg = document.getElementById("question_img")
const timerText = document.getElementById("timer_text");
const timeRemainingImg = document.getElementById("timeRemaining_img");
const fadeTransitionImage = document.getElementById('fadeTransition_image')
const curtainImage = document.getElementById('curtain_image')
const lives1Image = document.getElementById('lives1_image')
const lives2Image = document.getElementById('lives2_image')
const lives3Image = document.getElementById('lives3_image')



/**
 * Gets the music to be played, and set it to loop
 */
const gameIntroMusic = new Audio("../../assets/audio/music/gameMusic.mp3")
gameIntroMusic.loop ="true";

const gameMainMusic = new Audio("../../assets/audio/music/gameMainMusic.mp3")
gameMainMusic.loop ="true";

/**
 * Gets the Sound effects to be played
 */
const buttonSFX = new Audio("../../assets/audio/sfx/button.mp3")
const applauseSFX = new Audio("../../assets/audio/sfx/applause.mp3")
const cheerSFX = new Audio("../../assets/audio/sfx/cheer.mp3")
const awwSFX = new Audio("../../assets/audio/sfx/aww.mp3")
const correctSFX = new Audio("../../assets/audio/sfx/correct.mp3")
const wrongSFX = new Audio("../../assets/audio/sfx/wrong.mp3")
const textboxSFX = new Audio("../../assets/audio/sfx/textbox.mp3")
const timerSFX = new Audio("../../assets/audio/sfx/timer.mp3")
const dingSFX = new Audio("../../assets/audio/sfx/ding.mp3")

/**
 * The object literal used to store the player data.
 * Is used in saveScores function to store the player data for the leaderboard
 * @constructor
 */
let player = {
    Name: "",
    Avatar: 0,
    FinalScore: 0
}





// This code is based on the example from StackOverflow on how to add the click event to the whole body 
// Author: Yosef Tukachinsky
// Location: https://stackoverflow.com/questions/60351051/javascript-how-to-add-a-click-event-listener-in-the-body
// Accessed: 6/05/2025

/**
 * Adds the event to the whole body to change the dialogue when the screen is clicked.
 */
document.getElementsByTagName("body")[0].addEventListener("click",changeDialogueText)
// This code is based on the example from w3resource on how to add the press enter event to the whole body 
// Author: w3resource
// Location: https://www.w3resource.com/javascript-exercises/event/javascript-event-handling-exercise-9.php
// Accessed: 6/05/2025

/**
 * Adds the event to the whole body to change the dialogue when the enter key is pressed..
 */
document.getElementsByTagName("body")[0].addEventListener("keydown",(event) => {
    if(event.key == 'Enter'){
        changeDialogueText();
    }
})

/**
 * If theres a player inputted name in the sessionstorage, set the displayed text to it.
 * Otherwise, set it to TEMP
 * Modify the width to allow the background colour to highlight the name.
 * Modify the left value to center the name above the avatar.
 */
if(sessionStorage.getItem("TempName") != null){
    playerName = sessionStorage.getItem("TempName")
}
else{
    playerName = "TEMP";
}
contestantName.textContent = playerName
contestantName.style.width = 3*contestantName.textContent.length + "vw";
contestantName.style.left = 9 - contestantName.textContent.length + "vw";


/**
 * If theres a player selected avatar in the sessionstorage, set the avatar image to it.
 * Otherwise, set it to the first avatar.
 */
if(sessionStorage.getItem("TempAvatar") != null){
    avatarNumber = sessionStorage.getItem("TempAvatar")
   
}
else{
    avatarNumber = 1;
}
contestantAvatar.src = "../../assets/images/animated/avatar/" + String(avatarNumber) + "/avatar" +String(avatarNumber) +"game.gif";


/**
 * Set the displayed score to the score.
 * Modify the width to allow the background colour to highlight the score.
 * Modify the left value to center the score above the host.
 */
currentScore.textContent = score;
currentScore.style.width = 4*currentScore.textContent.length + "vw";
currentScore.style.left = 86.5 - currentScore.textContent.length + "vw";


// This code is based on the example from W3 Schools on detecting mouse hover and selction by tabbing elements
// Author: W3 Schools
// Location: https://www.w3schools.com/jsref/event_onmouseenter.asp
// Location: https://www.w3schools.com/jsref/event_onmouseover.asp
// Location: https://www.w3schools.com/jsref/event_onfocus.asp
// Location: https://www.w3schools.com/jsref/event_onblur.asp
// Accessed: 29/05/2025
/**
 * Adds events to the answer buttons when its clicked, hovered or selected
 */
for(let i = 0; i < 4;i++){
    answerOptions[i].addEventListener("mouseenter",hoverElement)
    answerOptions[i].addEventListener("mouseleave",unhoverElement)
    answerOptions[i].addEventListener("focus",hoverElement)
    answerOptions[i].addEventListener("blur",unhoverElement)
}


/**
 * If the element is hovered over by a mouse or selected, make its borders larger and light blue
 * @param {*} event the element where the event was fired from 
 */
function hoverElement(event){
    if(currentState == "Game" && answered == false){
        event.target.style.borderColor = "lightblue"
        event.target.style.borderWidth = 0.7 + "vw";
    }
}
/**
 * If the element is no longer hovered over by a mouse or selected, make its borders the default size and colour
 * @param {*} event the element where the event was fired from 
 */
function unhoverElement(event){
    if(currentState == "Game" && answered == false){ 
        event.target.style.borderColor = "white"
        event.target.style.borderWidth = 0.4 + "vw";
    }
}




// This code is based upon an example from the W3Schools HTML tutorial on random number generation in JavaScript
// Author: W3Schools
// Location: https://www.w3schools.com/js/js_random.asp
// Accessed: 26/03/2025

/**
 * Return a random number between the minimum and (excluded) maximum number
 * @param {*} min the minimum value
 * @param {*} max the maximum value (Excluded)
 * @returns number the random number between the 2 values.
 */
function randomRange(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}


/**
 * Starts the new phase of questions.
 */
function newQuestion(){
    /**
     * Resets the player and host images from the celebration images.
     */
    contestantAvatar.src =  "../../assets/images/animated/avatar/" + String(avatarNumber) + "/avatar" +String(avatarNumber) +"game.gif"
    hostImage.src = "../../assets/images/animated/host/host.gif"
    /**
     * Set the score display to the current score
     */
    currentScore.textContent = score;
    currentScore.style.left = 86.5 - currentScore.textContent.length + "vw";
    currentScore.style.width = 4*currentScore.textContent.length + "vw";

    /**
     * Resets the answered state, as well as resetting all of the answer button's colours.
     */
    console.log(answered)
    answered = false;
    for(let i = 0; i < 4;i++){
        answerOptions[i].style.backgroundColor = "darkslateblue";
    }
    /**
     * Sets the current time, and start decrementing the timer.
     */
    time = timeRemaining;
    decrementTimer();

    /**
     * Select a random new question from the question array.
     * The index of the last question is compared to prevent the same two question in a row.
     */

    // let isactuallyunique = true
    // while(!isUnique){
    //     potentialQustionIndex = 
    //     if(askedQuestions.length >= 15){
    //         askedQuestions = [null]
    //     }

    //     if(askedQuestions.length >= 0){
    //         for(let i=0; i < askedQuestions.length; i++){           
    //             if(askedQuestions[i] === potentialQustionIndex){
    //                 isactuallyunique = false;
    //             }
    //         }  
    //         if(isactuallyunique === true){
    //             askedQuestions.push(potentialQustionIndex);
    //             isUnique = true;
    //         } 
    //     }
       
    // }
    let isUnique = false;
    while(!isUnique){
        questionIndex = getRandomInt(questions.length)
        if(questionIndex != previousQuestionIndex){
            isUnique = true;
        }
    }
    previousQuestionIndex = questionIndex;


    /**
     * Set the DOM elements to the content of the question JSON at the selected index.
     */
    currentQuestion = questions[questionIndex];
    questionDisplay.textContent = currentQuestion.question;

    /**
     * An array of possible index values are shuffled 50 times
     * to randomize them.
     */
    let answerIndexes = [0,1,2,3]
    for(let i = 0; i < 50;i++){
        let randomIndex = randomRange(0,answerIndexes.length-1)
        let tempAnswerIndex = answerIndexes[randomIndex]
        answerIndexes[randomIndex] = answerIndexes[randomIndex+1]
        answerIndexes[randomIndex+1] = tempAnswerIndex
    }
    /**
     * The values of the answer buttons are then based on this randomized order of indexes.
     */
    answerOptions[answerIndexes[0]].value = currentQuestion.option1
    answerOptions[answerIndexes[1]].value = currentQuestion.option2
    answerOptions[answerIndexes[2]].value = currentQuestion.option3
    answerOptions[answerIndexes[3]].value = currentQuestion.option4
    for(let i = 0; i < 4;i++){
        answerOptions[i].addEventListener("click",processAnswer)
    }
    if(currentQuestion.image !=""){
        questionImg.src = currentQuestion.image;
    }
    else{
        questionImg.src = "../../assets/images/still/questionimgdefault.png";
    }
}

/**
 * Handles the events occuring after the player presses an answer button.
 * @param {*} event the element where the event was fired from 
 */
function processAnswer(event){

    /**
     * Reset all the border highlights from all buttons/
     */
    for(let i = 0; i < 4;i++){
    answerOptions[i].style.borderColor = "white"
    answerOptions[i].style.borderWidth = 0.4 + "vw";
    }
    /**
     * Change the answered boolean to prevent multiple presses of the button.
     */
    if(answered == false && time+1 > 0){
        answered = true;
        if(sessionStorage.getItem("ToggleSFX") === "true" && sessionStorage.getItem("ToggleSFX") !== null){
            buttonSFX.play();
        }
        /**
         * Iterate through the answer variable of the current question to see if 
         * the value from the fired button is included.
         */   
        if(currentState == "Game"){
            let correctlyAnswered = false
            for(const answer of currentQuestion.answer){
                if(event.target.value === answer){
                    correctlyAnswered = true
                }
            }
            /**
             * If so, start the function for correctly answering.
             */
            if(correctlyAnswered){
                processCorrectAnswer(event)
            }
            else{
                /**
                 * Else, start the function for wrongly answering
                 * The button is highlighted red to differentiate it from running out of time.
                 */
                event.target.style.backgroundColor = "Red";
                processWrongAnswer(currentQuestion);
              
            }
        }
    }
   
    
    
}

/**
 * Handles events for player correctly answering.
 * @param {*} event the element where the event was fired from 
 */
function processCorrectAnswer(event){
    /**
     * Change the DOM elements properties to reflect a correct answer.
     */
    contestantAvatar.src =  "../../assets/images/animated/avatar/" + String(avatarNumber) + "/avatar" +String(avatarNumber) +"celebrate.gif"
    hostImage.src = "../../assets/images/still/host/hosthappy.png"
    questionImg.src = "../../assets/images/still/questionimagecorrect.png";
    event.target.style.backgroundColor = "Green";
    /**
     * Play the sound for correct answer if possible.
     */
    if(sessionStorage.getItem("ToggleSFX") === "true" && sessionStorage.getItem("ToggleSFX") !== null){
        correctSFX.load();
        correctSFX.play();
    }
    /**
     * Increase the score, and decrease the time given for a question by 1 every 4 questions.
     * However, if it would be below 3, set it to 3.
     */
    score++;
    timeRemaining = 10 - Math.floor((score/4))
    if(timeRemaining <=3){
        timeRemaining = 3;
    }
    /**
     * Start a new question in 1 second.
     */
    setTimeout(newQuestion,1000);
}

/**
 * Handles events for player correctly answering.
 * @param {*} currentQuestion the element where the event was fired from 
 */
function processWrongAnswer(currentQuestion){
    /**
     * Stop the music, and play the sound effect for a wrong answer if possible.
     */

    if(sessionStorage.getItem("ToggleSFX") === "true" && sessionStorage.getItem("ToggleSFX") !== null){
        awwSFX.play();
        wrongSFX.load();
        wrongSFX.play();
    }
    /**
     * Change the DOM elements properties to reflect a wrong answer.
     */
    contestantAvatar.src =  "../../assets/images/animated/avatar/" + String(avatarNumber) + "/avatar" +String(avatarNumber) +"frown.gif"
    hostImage.src = "../../assets/images/still/host/hostdead.png"
    questionImg.src = "../../assets/images/still/questionimagewrong.png";
    /**
     * If this function is called for running out of time,
     * make sure the player can't continue to answer,
     * and highlight each correct answer (green for answering incorrectly, purple for running out of time.)
     */
    answered = true;
    for(let i = 0; i < 4;i++){
            for(const answer of currentQuestion.answer){
                if(answerOptions[i].value === answer){
                    if(time <=0){
                        answerOptions[i].style.backgroundColor = "Purple";
                    }
                    else{
                        answerOptions[i].style.backgroundColor = "Green";
                    }

                }
            }
        }
    lives -= 1;
    if(lives === 2){
        lives3Image.style.opacity = 0.0;
        setTimeout(newQuestion,1000);
    }
    if(lives === 1){
        lives2Image.style.opacity = 0.0;
        setTimeout(newQuestion,1000);
    }
    else if(lives <= 0){
        if(sessionStorage.getItem("ToggleMusic") === "true" && sessionStorage.getItem("ToggleMusic")!== null){
            gameMainMusic.pause()
        }
        lives1Image.style.opacity = 0.0;
        setTimeout(endGame,1000)
    }
    /**
     * Start the events for ending the game in 1 second.
     */
;

}

/**
 * Decrements the timer.
 */
function decrementTimer(){
    /**
     * Set the time display element to the current time.
     * Set the width of the timer bar to be proportional to the current time.
     */
    timerText.textContent = time;
    timeRemainingImg.style.width = time * 5 + "vw";
    /**
     * While the player has not answered and during gameplay,
     * decrease the time, play the ticking sound and make this function occur again after 1 second.
     * If the time hits 0, play the ding sound and process as if player has answered wrongly.
     */
    console.log(answered)
    if(answered == false && currentState=="Game"){
        if(time <= 0){
            if(sessionStorage.getItem("ToggleSFX") === "true" && sessionStorage.getItem("ToggleSFX") !== null){
                dingSFX.play();
            }
            processWrongAnswer(currentQuestion);
        }
        else{

            if(sessionStorage.getItem("ToggleSFX") === "true" && sessionStorage.getItem("ToggleSFX") !== null){
                timerSFX.load();
                timerSFX.play();
            }
            time--;
            setTimeout(decrementTimer,1000)
        }
       
    }
}

/**
 * Makes the dialogue box appear, and set it to its starting animation.
 * After 1 second, display the text.
 */
function showDialogueImg(){
    hostDialogueImg.style.visibility = "visible";
    hostDialogueImg.style.animation = 'dialogueAppear 1.0s';
    setTimeout(showDialogueText,1000);
}

/**
 * Show the dialogue text, and set the dialogue box to stay in its current position.
 */
function showDialogueText(){
    hostDialogueImg.style.animation = 'dialogueDefault 1.0s infinite';
    hostDialogueText.style.visibility = "visible";
    changeDialogueText();
}
/**
 * Makes the dialogue text appear, and set the dialogue box to its starting animation.
 * After 1 second, hide the dialogue box.
 */
function hideDialogueText(){
    hostDialogueText.style.visibility = "hidden";
    hostDialogueImg.style.animation = 'dialogueDissapear 1.0s';
    setTimeout(hideDialogueImg,1000);
}
/**
 * Hides the dialogue box.
 */
function hideDialogueImg(){
    hostDialogueImg.style.visibility = "hidden";
}

/**
 * Change the dialogue text based on the current dialogue index, which is incremented each time this is called. 
 * Also perform events based on the current dialogue.
 */
function changeDialogueText(){
    if(hostDialogueText.style.visibility == "visible"){
        dialogueIndex++;
        questionDisplay.style.visibility = "visible";
        questionDisplay.textContent = "Press Enter / Click on screen"
        if(sessionStorage.getItem("ToggleSFX") === "true" && sessionStorage.getItem("ToggleSFX") !== null){
                textboxSFX.play();
            }
        if(currentState == "Intro"){
            /**
             * Once the intro dialogue is finished, start the game.
             */
            if(dialogueIndex >= IntroDialogue.length){
                questionDisplay.style.visibility = "hidden";
                hideDialogueText();
                setTimeout(startGame,1000);
                if(sessionStorage.getItem("ToggleMusic") === "true" && sessionStorage.getItem("ToggleMusic")!== null){
                    gameIntroMusic.pause()
                }
            }
            /**
             * Play the host's intro animation on their introduction dialogue.
             */
            else if(dialogueIndex === 1){
                if(sessionStorage.getItem("ToggleSFX") === "true" && sessionStorage.getItem("ToggleSFX") !== null){
                    applauseSFX.load();
                    applauseSFX.play();
                }
                hostDialogueText.textContent = IntroDialogue[dialogueIndex];
                hostImage.src = "../../assets/images/animated/host/hostIntro.gif"
            }
            /**
             * Play the avatar's intro animation on their introduction dialogue.
             */
            else if(dialogueIndex === 2){
                if(sessionStorage.getItem("ToggleSFX") === "true" && sessionStorage.getItem("ToggleSFX") !== null){
                    cheerSFX.play();
                }
                hostImage.src = "../../assets/images/animated/host/host.gif"
                hostDialogueText.textContent = IntroDialogue[dialogueIndex];
                contestantAvatar.src =  "../../assets/images/animated/avatar/" + String(avatarNumber) + "/avatar" +String(avatarNumber) +"wave.gif"
            }
             /**
             * For eveything else, set the avatar and host's image to default.
             */
            else{
                hostImage.src = "../../assets/images/animated/host/host.gif"
                hostDialogueText.textContent = IntroDialogue[dialogueIndex];
                contestantAvatar.src =  "../../assets/images/animated/avatar/" + String(avatarNumber) + "/avatar" +String(avatarNumber) +"game.gif"
            }

        }
        else if(currentState == "GameOver"){
            /**
             * Once the outro dialogue is finished, start the game outro.
             */
            if(dialogueIndex >= GameOverDialogue.length){
                questionDisplay.style.visibility = "hidden";
                hideDialogueText();
                setTimeout(startOutro,1000);
            }
            /**
             * Set the host's image to default after the first message.
             */
            else if(dialogueIndex === 1){
                hostDialogueText.textContent = GameOverDialogue[dialogueIndex];
                hostImage.src = "../../assets/images/animated/host/host.gif"
            }
            /**
             * Set the avatar's image to default after the second message.
             */
            else if(dialogueIndex >= 2){
                hostDialogueText.textContent = GameOverDialogue[dialogueIndex];
                contestantAvatar.src =  "../../assets/images/animated/avatar/" + String(avatarNumber) + "/avatar" +String(avatarNumber) +"game.gif"
            }
            else{
                hostDialogueText.textContent = GameOverDialogue[dialogueIndex];
            }

        }
    }

}

/**
 * Handles the intro of the game by playing the applause sound effect if possible, 
 * and setting the curtain animation to move up, as well as
 * calling the function to show the starting dialogue.
 */
function startIntro(){
    if(sessionStorage.getItem("ToggleSFX") === "true" && sessionStorage.getItem("ToggleSFX") !== null){
        applauseSFX.play();
    }
    curtainImage.style.animation = 'curtainUp 3.0s';
    setTimeout(showDialogueImg,4000)
}

/**
 * Handles starting the game by setting the current state to gameplay,
 * play the music if possible, setting the DOM properties for gameplay
 * and selecting the first quesiton.
 */
function startGame(){
    currentState = "Game";
    if(sessionStorage.getItem("ToggleMusic") === "true" && sessionStorage.getItem("ToggleMusic")!== null){
        gameMainMusic.load()
        gameMainMusic.play()
    }
    changeElements();
    newQuestion()
}
/**
 * Handles ending the game by setting the current state to gameover,
 * setting the DOM properties for indicating the game is over,
 * and calling the function to show the ending dialogue.
 */
function endGame(){
    currentState = "GameOver";
    questionImg.src = "../../assets/images/still/questionimgdefault.png";
    dialogueIndex = -1;
    for(let i = 0; i < 4;i++){
        answerOptions[i].style.backgroundColor = "darkslateblue";
    }
    changeElements();
    setTimeout(showDialogueImg,1000)
}



/**
 * Handles the outro of the game by setting the DOM element properties, 
 * then calling the saveScores function.
 * The animation for the curtain and fade out varies on whether the music can play, to line the transition with the music better.
 */
function startOutro(){
    if(sessionStorage.getItem("ToggleMusic") === "true" && sessionStorage.getItem("ToggleMusic")!== null){
        gameIntroMusic.load()
        gameIntroMusic.play()
    }
    contestantAvatar.src =  "../../assets/images/animated/avatar/" + String(avatarNumber) + "/avatar" +String(avatarNumber) +"wave.gif"
    hostImage.src = "../../assets/images/animated/host/hostIntro.gif"
    currentState = "Outro"
    if(sessionStorage.getItem("ToggleSFX") === "true" && sessionStorage.getItem("ToggleSFX") !== null){
        applauseSFX.play();
        cheerSFX.play();
    }
    saveScores()
    if(sessionStorage.getItem("ToggleMusic") === "true" && sessionStorage.getItem("ToggleMusic")!== null){
        curtainImage.style.animation = 'curtainDown 10.0s';
        fadeTransitionImage.style.animation = 'fadeOut 13.0s'
        setTimeout(goToLeaderBoard,10000)
    }
    else{
        curtainImage.style.animation = 'curtainDown 5.0s';
        fadeTransitionImage.style.animation = 'fadeOut 7.0s'
        setTimeout(goToLeaderBoard,5000)
    }

}

/**
 * Saves the player data to the leaderboard.
 * The variables in the player object literal is assigned the appropriate values,
 * then gets the current list of entries form the localstorage.
 * The player object literal is pushed to this list, 
 * or sets the value of localstorage to itself if theres nothing in the storage.
 */
function saveScores(){
    player.Name = playerName;
    player.Avatar = avatarNumber;
    player.FinalScore = score;
    let entries = []
    if(localStorage.getItem("PlayerEntries")!==null){
        entries = JSON.parse(localStorage.getItem("PlayerEntries"));
    }
    entries.push(player)
    localStorage.setItem("PlayerEntries",JSON.stringify(entries))
}

/**
 * Sets the current window to the leaderboard page.
 */
function goToLeaderBoard(){
        window.location = "../leaderboard/leaderboard.html"
}



/**
 * Changes the DOM element's properties to match the current game state.
 */
function changeElements(){
    if(currentState == "Intro" || currentState == "GameOver"){
        for(let i = 0; i < 4;i++){
            answerOptions[i].value = "-";
            answerOptions[i].style.opacity = "0.7"
        }
        questionDisplay.style.visibility = "hidden";
    }
    else if (currentState == "Game"){
        for(let i = 0; i < 4;i++){
            answerOptions[i].style.opacity = "1"
        }
        questionDisplay.style.visibility = "visible";
    }
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}


/**
 * Sets the initial values of DOM element properties 
 * */
hostDialogueImg.style.visibility = "hidden";
hostDialogueText.style.visibility = "hidden";
questionImg.src = "../../assets/images/still/questionimgdefault.png";
hostImage.src = "../../assets/images/animated/host/host.gif"
curtainImage.style.animation = 'curtainDefault 1.0s infinite';
changeElements();
/**
 * Start the game after 2 seconds,
 * and play the intro music if possible.
 */
setTimeout(startIntro,2000)
if(sessionStorage.getItem("ToggleMusic") === "true" && sessionStorage.getItem("ToggleMusic")!== null){
    gameIntroMusic.play()
}






