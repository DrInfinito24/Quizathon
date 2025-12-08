
/**
 * Gets the DOM elements to be manipulated by JS code
 */

const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
const nameEntryField = document.getElementById("user");
const fadeTransitionImage = document.getElementById('fadeTransition_image')
/**
 * Add events to the buttons for being clicked.
 */
nextButton.addEventListener("click",processNextButtonPressed)
backButton.addEventListener("click",processBackButtonPressed)

/**
 * Gets the music to be played, and set it to loop
 */
const nameEntryMusic = new Audio("../../assets/audio/music/nameentryMusic.mp3")
nameEntryMusic.loop ="true";

/**
 * Gets the sound effects to be played
 */
const buttonSFX = new Audio("../../assets/audio/sfx/button.mp3")


/**
 * Start the fade transition animation and go to main menu after 0.2 seconds.
 */
function processBackButtonPressed(event){
    if(sessionStorage.getItem("ToggleSFX") === "true" && sessionStorage.getItem("ToggleSFX") !== null){
        buttonSFX.play();
    }
    fadeTransitionImage.style.animation = 'fadeOut 0.3s'
    setTimeout(goToMainMenu,200)
}

/**
 * Change the current window to main menu.
 */
function goToMainMenu(){
    window.location = "../mainmenu/index.html"
}


/**
 * If the entered text in the name entry field is or below 8 characters,
 * start the fade transition animation and go to avatar entry menu after 0.2 seconds.
 * Otherwise, change the color of name entry field to red to indicate an issue.
 */
function processNextButtonPressed(event){
    if(sessionStorage.getItem("ToggleSFX") === "true" && sessionStorage.getItem("ToggleSFX") !== null){
        buttonSFX.play();
    }
    if(nameEntryField.value != null && nameEntryField.value != "" && nameEntryField.value.length <=8){
        sessionStorage.setItem("TempName",nameEntryField.value)
        fadeTransitionImage.style.animation = 'fadeOut 0.3s'
        setTimeout(goToAvatarEntry,200)
        
    }
    else{
        nameEntryField.style.borderColor = "red";
    }

}

/**
 * Change the current window to avatar entry.
 */
function goToAvatarEntry(){
    window.location = "../avatarentry/avatarentry.html"
}

/**
 * If the setting to play music is on, play the music in this window.
 */
if(sessionStorage.getItem("ToggleMusic") === "true" && sessionStorage.getItem("ToggleMusic")!== null){
    nameEntryMusic.play()
}
