let modalBg = document.querySelector(".modal-bg");
let modalClose = document.querySelector(".modal-close");






/**
 * The function create the alphabet buttons
 */

function createAlphabet() {
    for (let i = 0; i < alphabet.length; i++) {
       let createButton = document.createElement("button");
       let div = document.getElementById("button");
       div.appendChild(createButton)
       createButton.className = "alphabet";
       createButton.innerHTML = alphabet[i];   
 
       createButton.addEventListener("click", onAlphabetClicked);
 
    }
 }



 

/**
 * This function print the modal that say to the player once it loose
 */
function gameOver() {
    modalBg.classList.add("bg-active");
 
    modalClose.addEventListener("click", function () {
       modalBg.classList.remove("bg-active")
       window.location.reload();
    })
 
 }

