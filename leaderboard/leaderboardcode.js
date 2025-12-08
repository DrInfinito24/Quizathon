
/**
 * Gets the DOM elements to be manipulated by JS code
 */
const leaderboardBody = document.getElementById("leaderboardBody");
const leaderboardbgImage = document.getElementById("leaderboardbg_image");
const fadeTransitionImage = document.getElementById('fadeTransition_image')
const menuButton = document.getElementById("menu_button");

/**
 * Adds events to the back button when its clicked
 */
menuButton.addEventListener("click",processMenuButtonPressed)

/**
 * Gets the music to be played, and set it to loop
 */
const leaderBoardMusic = new Audio("../../Quizathon/assets/audio/music/leaderboardMusic.mp3")
leaderBoardMusic.loop ="true";

/**
 * Gets the Sound effects to be played
 */
const buttonSFX = new Audio("../../Quizathon/assets/audio/sfx/button.mp3")

/**
 * Starts the fade transition animation, and go to the main menu after 0.2 seconds.
 */
function processMenuButtonPressed(){
    if(sessionStorage.getItem("ToggleSFX") === "true" && sessionStorage.getItem("ToggleSFX") !== null){
        buttonSFX.play();
    }
    fadeTransitionImage.style.animation = 'fadeOut 0.3s'
    setTimeout(goToMainMenu,200)
}

/**
 * Sets the current window to the main menu
 */
function goToMainMenu(){
    window.location = "../mainmenu/index.html"
}

/**
 * Gets the player entries from the local storage, sort it by their scores, and fill the leaderboard.
 * If there is nothing in the local storage, display an 'empty' leaderboard instead.
 */
const playerEntries = JSON.parse(localStorage.getItem("PlayerEntries"));
 if (playerEntries !== null) {
    sortLeaderboard();
    fillLeaderboard();
 }
 else{
    console.log("Can't load the leaderboard!")
    fillEmptyLeaderboard()

 }

// This code is based on the leadeerboard example from the W8 L1 Storage Debugging Challenge from Lecture-Examples Repositiory.
// Author: IM-WADD
// Location: https://github.com/IM-WADD/Lecture-Examples
// Accessed: 28/05/2025

/**
 * Fills the leaderboard table based on variables from each of the player entries.
 */
function fillLeaderboard(){
    const table = document.getElementById("Entries");
    for(let i=0; i < playerEntries.length; i++){
        const newPlayerRow = document.createElement("tr");
                /**
                 * The player's rank
                 */
                 const playerRanking = document.createElement("td");
                 playerRanking.innerText = i+1

                newPlayerRow.appendChild(playerRanking);

                /**
                 * The player's avatar
                 */
                const playerAvatarCol = document.createElement("td");
                let avatarNumber = parseInt(playerEntries[i].Avatar)
                let avatarInnerHTML
                if(avatarNumber !== null && avatarNumber !== 0){
                   let avatarPath = "\"../../Quizathon/assets/images/still/avatar/" + String(avatarNumber) + "/avatar" + String(avatarNumber) +".png\" "
                    avatarInnerHTML = "<img src = " + avatarPath + "alt = Player Avatar Image  width=70px height=70px>" 
                }
                else{
                    avatarInnerHTML = "<img src = " + "\"../../Quizathon/assets/images/still/avatar/1/avatar1.png\" " + "alt = Player Avatar Image  width=70px height=70px>" 
                }
                playerAvatarCol.innerHTML =  avatarInnerHTML
                newPlayerRow.appendChild(playerAvatarCol);
                
                /**
                 * The player's name
                 */
                const playerNameCol = document.createElement("td");
                 if(playerEntries[i].Name !== null && playerEntries[i].Name !== ""){
                   playerNameCol.innerText = playerEntries[i].Name
                }
                else{
                    playerNameCol.innerText = "Default"
                }
                newPlayerRow.appendChild(playerNameCol);


                /**
                 * The player's score
                 */
                const playerScoreCol = document.createElement("td");
                if(playerEntries[i].FinalScore !== null && playerEntries[i].FinalScore !== ""){
                    playerScoreCol.innerText = playerEntries[i].FinalScore;
                }
                else{
                    playerScoreCol.innerText = 0;
                }

                newPlayerRow.appendChild(playerScoreCol);
                table.appendChild(newPlayerRow);
    }
    leaderboardBody.style.height = playerEntries.length*10 + 100+ "vh";
    leaderboardbgImage.style.height = playerEntries.length*10 + 100+ "vh";
}

// This code is based on the leadeerboard example from the W8 L1 Storage Debugging Challenge from Lecture-Examples Repositiory.
// Author: IM-WADD
// Location: https://github.com/IM-WADD/Lecture-Examples
// Accessed: 28/05/2025
/**
 * Creates an "empty" leaderboard to display if there are no player entries in local storage
 */
function fillEmptyLeaderboard(){

    const table = document.getElementById("Entries");
    const newPlayerRow = document.createElement("tr");
    newPlayerRow.style.height = 10+ "vh";

    const playerRanking = document.createElement("td");
    playerRanking.innerText = "-"
    newPlayerRow.appendChild(playerRanking);

    const playerAvatarCol = document.createElement("td");
    playerAvatarCol.innerText = "X"
    newPlayerRow.appendChild(playerAvatarCol);

    const playerNameCol = document.createElement("td");
    playerNameCol.innerText = "No One"
    newPlayerRow.appendChild(playerNameCol);

    const playerScoreCol = document.createElement("td");
    playerScoreCol.innerText = "-"
    newPlayerRow.appendChild(playerScoreCol);
    table.appendChild(newPlayerRow);
    
    leaderboardBody.style.height = 100+ "vh";
    leaderboardbgImage.style.height = 100+ "vh";
}

/**
 * Perform a bubble sort to sort the scores.
 * Due to how the entries are appended, the comparison 
 * between two values are reversed from normal bubble sort implementation.
 */
function sortLeaderboard(){
    for(let i = 0; i < playerEntries.length;i++){
            for(let j = 0; j < (playerEntries.length-1);j++){
                if(playerEntries[j].FinalScore<playerEntries[j+1].FinalScore){
                    let tempEntry = playerEntries[j]
                    playerEntries[j] = playerEntries[j+1]
                    playerEntries[j+1] = tempEntry
                }
        }
    }
}

/**
 * If the setting to play music is on, play the music in this window.
 */
if(sessionStorage.getItem("ToggleMusic") === "true" && sessionStorage.getItem("ToggleMusic")!== null){
    leaderBoardMusic.play()
}

setTimeout(processMenuButtonPressed,30000)


console.log(JSON.parse(localStorage.getItem("PlayerEntries")))
