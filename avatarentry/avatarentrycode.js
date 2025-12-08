/**
 * Gets the DOM elements to be manipulated by JS code
 */
const backButton = document.getElementById("back-button");
const avatarButtons = document.getElementsByName("avatar-btn")
const avatarImages = document.getElementsByClassName("avatar-img")
const fadeTransitionImage = document.getElementById('fadeTransition_image')

/**
 * Gets the music to be played, and set it to loop
 */
const avatarEntryMusic = new Audio("../../assets/audio/music/avatarEntryMusic.mp3")
avatarEntryMusic.loop ="true";

/**
 * Gets the Sound effects to be played
 */

const buttonSFX = new Audio("../../assets/audio/sfx/button.mp3")

const avatarSFX = new Audio("../../assets/audio/sfx/avatar.mp3")

/**
 * Prevents the user from choosing another avtar once chosen.
 */
let chosen = false;

// This code is based on the example from W3 Schools on detecting mouse hover and selction by tabbing elements
// Author: W3 Schools
// Location: https://www.w3schools.com/jsref/event_onmouseenter.asp
// Location: https://www.w3schools.com/jsref/event_onmouseover.asp
// Location: https://www.w3schools.com/jsref/event_onfocus.asp
// Location: https://www.w3schools.com/jsref/event_onblur.asp
// Accessed: 29/05/2025

/**
 * Adds events to the back button when its clicked, hovered or selected
 */
backButton.addEventListener("click",processBackButtonPressed)
backButton.addEventListener("mouseenter",hoverElement)
backButton.addEventListener("mouseleave",unhoverElement)
backButton.addEventListener("focus",hoverElement)
backButton.addEventListener("blur",unhoverElement)

/**
 * If the element is hovered over by a mouse or selected, make its borders larger and light blue
 * @param {*} event the element where the event was fired from 
 */
function hoverElement(event){
    event.target.style.borderColor = "lightblue"
    event.target.style.borderWidth = 0.7 + "vw";  
}

/**
 * If the element is no longer hovered over by a mouse or selected, make its borders the default size and colour
 * @param {*} event the element where the event was fired from 
 */
function unhoverElement(event){
    event.target.style.borderColor = "white"
    event.target.style.borderWidth = 0.5 + "vw";  
}

/**
 * Adds events to the avatar button when its clicked, hovered or selected
 */
for(let i = 0; i < avatarButtons.length;i++){
    avatarButtons[i].addEventListener("click",processPlayerEntry)
    avatarButtons[i].addEventListener("mouseenter",hoverAvatarButton)
    avatarButtons[i].addEventListener("mouseleave",unHoverAvatarButton)
    avatarButtons[i].addEventListener("focus",hoverAvatarButton)
    avatarButtons[i].addEventListener("blur",unHoverAvatarButton)
}

/**
 * If any of the avatar buttons are hovered over by a mouse, make its borders larger and light blue,
 * and shift the element to make it line up with other elements.
 * @param {*} event the element where the event was fired from 
 */
function hoverAvatarButton(event){
    for(let i = 0; i < avatarButtons.length;i++){
        if(event.target === avatarButtons[i]){
            avatarImages[i].style.borderColor = "lightblue"
            avatarImages[i].style.borderWidth = 0.7 + "vw";
            avatarImages[i].style.marginLeft = -0.5 + "vw";
            avatarImages[i].style.marginTop = -0.5 + "vw";           
        }
    }

}
/**
 * If the element is no longer hovered over by a mouse, make its borders the default size and colour,
 * as well as setting the positions to default positions.
 * @param {*} event the element where the event was fired from 
 */
function unHoverAvatarButton(event){
    for(let i = 0; i < avatarButtons.length;i++){
        if(event.target === avatarButtons[i]){
            avatarImages[i].style.borderColor = "white"
            avatarImages[i].style.borderWidth = 0.3 + "vw";
            avatarImages[i].style.marginLeft = 0 + "vw";  
            avatarImages[i].style.marginTop = 0 + "vw";   
        }
    }
}

/**
 * Changes the window to the previous name entry screen once the back button is pressed
 * Delay the changing of the scene to allow the fade animation to occur
 * Can only occur if the player has not selected an avatar yet.
 */
function processBackButtonPressed(){
    if(chosen === false){
        if(sessionStorage.getItem("ToggleSFX") === "true" && sessionStorage.getItem("ToggleSFX") !== null){
            buttonSFX.play();
        }
        fadeTransitionImage.style.animation = 'fadeOut 0.3s'
        setTimeout(goToNameEntry,200)
    }
   
}

/**
 * Changes the window to the previous name entry screen.
 */
function goToNameEntry(){
    window.location = "../playernameentry/playernameentry.html"
}

/**
 * Gets the player's selected avatar number by iterating through the list of avatars 
 * until it matches the one the event was fired from.
 * Stores that number in the sesssion storage to be used for storing the player's data.
 * Changes the selected avatar's image to clearly show player their selection.
 * Change the scene to main gme after a delay to allow the fade animation to occur.
 * @param {*} event the element where the event was fired from 
 */
function processPlayerEntry(event){
    if(chosen === false){
        chosen = true
        for(let i = 0; i < avatarButtons.length;i++){
                if(event.target.id==avatarButtons[i].id){
                    if(sessionStorage.getItem("ToggleMusic") === "true" && sessionStorage.getItem("ToggleMusic")!== null){
                        avatarEntryMusic.pause()
                    }
                    if(sessionStorage.getItem("ToggleSFX") === "true" && sessionStorage.getItem("ToggleSFX") !== null){
                        buttonSFX.play();
                        avatarSFX.play();
                    }
                    sessionStorage.setItem("TempAvatar",i+1)
                    let altImagePath = "../../assets/images/still/avatar" + "/"+ String(i+1)+ "/avatar"+ + String(i+1)+ "alt.png";
                    avatarImages[i].src = altImagePath
                    fadeTransitionImage.style.animation = 'fadeOut 3s'
                    setTimeout(goToGame,2500)
                }
            }
    }
    
}

/**
 * Go to the main game window
 */
function goToGame(){
    window.location = "../game/game.html"
}


/**
 * If the setting to play music is on, play the music in this window.
 */
if(sessionStorage.getItem("ToggleMusic") === "true" && sessionStorage.getItem("ToggleMusic")!== null){
    avatarEntryMusic.play()
}
