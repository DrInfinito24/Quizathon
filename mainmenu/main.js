
/**
 * Gets the DOM elements to be manipulated by JS code
 */

const playButton = document.getElementById("play_button");
const leaderboardButton = document.getElementById("leaderboard_button");
const musicButton = document.getElementById("music_button");
const sfxButton = document.getElementById("sfx_button");
const fadeTransitionImage = document.getElementById('fadeTransition_image')

/**
 * Add events to the buttons for being clicked.
 */
playButton.addEventListener("click",processPlayButtonPressed)
leaderboardButton.addEventListener("click",processLeaderboardButtonPressed)
musicButton.addEventListener("click",processMusicButtonPressed)
sfxButton.addEventListener("click",processSFXButtonPressed)

/**
 * Gets the music to be played, and set it to loop
 */
const mainmenuMusic = new Audio("../../Quizathon/assets/audio/music/mainmenuMusic.mp3")
mainmenuMusic.loop ="true";

/**
 * Gets the sound effects to be played
 */
const buttonSFX = new Audio("../../Quizathon/assets/audio/sfx/button.mp3")

/**
 * Gets whether the music can be played by checking te session storage values.
 * If not null, set the canPlayMusic variable to the storage value.
 * If null, set the storage value to false first.
 * Change the music button's style based on the variable value.
 */
let canPlayMusic;
if(sessionStorage.getItem("ToggleMusic") === null){
    sessionStorage.setItem("ToggleMusic","false")
    canPlayMusic = sessionStorage.getItem("ToggleMusic")
}
else{
    canPlayMusic = sessionStorage.getItem("ToggleMusic")
}
ToggleMusicButton()

/**
 * Gets whether the sfx can be played by checking te session storage values.
 * If not null, set the canPlaySFX variable to the storage value.
 * If null, set the storage value to false first.
 * Change the sfx button's style based on the variable value.
 */
let canPlaySFX;
if(sessionStorage.getItem("ToggleSFX") === null){
    sessionStorage.setItem("ToggleSFX","false")
    canPlaySFX = sessionStorage.getItem("ToggleSFX")
}
else{
    canPlaySFX = sessionStorage.getItem("ToggleSFX")
}
ToggleSFXButton()

/**
 * Start the fade transition animation and go to name entry window after 0.2 seconds.
 */
function processPlayButtonPressed(){
    if(sessionStorage.getItem("ToggleSFX") === "true" && sessionStorage.getItem("ToggleSFX") !== null){
        buttonSFX.play();
    }
    fadeTransitionImage.style.animation = 'fadeOut 0.3s'
    setTimeout(goToNameEntry,200)
}

/**
 * Change the current window to name entry.
 */
function goToNameEntry(){
    window.location = "../playernameentry/playernameentry.html"
}

/**
 * Start the fade transition animation and go to leaderboard window after 0.2 seconds.
 */
function processLeaderboardButtonPressed(){
    if(sessionStorage.getItem("ToggleSFX") === "true" && sessionStorage.getItem("ToggleSFX") !== null){
        buttonSFX.play();
    }
    fadeTransitionImage.style.animation = 'fadeOut 0.3s'
    setTimeout(goToLeaderBoard,200)
}

/**
 * Change the current window to leaderboard.
 */
function goToLeaderBoard(){
    window.location = "../leaderboard/leaderboard.html"
}

/**
 * Swaps the boolean value of if the music button can be played, and stores it in the session storage.
 * Change the music button's style based on the variable value.
 */
function processMusicButtonPressed(){
    if(sessionStorage.getItem("ToggleSFX") === "true" && sessionStorage.getItem("ToggleSFX") !== null){
        buttonSFX.play();
    }
    canPlayMusic = !canPlayMusic;
    sessionStorage.setItem("ToggleMusic",canPlayMusic)
    ToggleMusicButton()

}

/**
 * Swaps the boolean value of if the music button can be played, and stores it in the session storage.
 * Change the sfx button's style based on the variable value.
 */
function processSFXButtonPressed(){
    canPlaySFX = !canPlaySFX;
    sessionStorage.setItem("ToggleSFX",canPlaySFX)
    if(sessionStorage.getItem("ToggleSFX") === "true" && sessionStorage.getItem("ToggleSFX") !== null){
        buttonSFX.play();
    }

    ToggleSFXButton()

}

/**
 * Change the text and colour of the music button based on whether music can play.
 */
function ToggleMusicButton(){
    if(sessionStorage.getItem("ToggleMusic") === "true" && sessionStorage.getItem("ToggleMusic")!== null){
        musicButton.value = "Music Enabled"
        musicButton.style.backgroundColor = "green"
        mainmenuMusic.play();
    }
    else{
        musicButton.style.backgroundColor = "gray"
        musicButton.value = "Music Disabled"
        mainmenuMusic.pause();
    }
}

/**
 * Change the text and colour of the sfx button based on whether sfx can play.
 */
function ToggleSFXButton(){
    if(sessionStorage.getItem("ToggleSFX") === "true" && sessionStorage.getItem("ToggleSFX") !== null){
        sfxButton.style.backgroundColor = "green"
        sfxButton.value = "SFX Enabled"
    }
    else{
        sfxButton.style.backgroundColor = "gray"
        sfxButton.value = "SFX Disabled"
    }
}


