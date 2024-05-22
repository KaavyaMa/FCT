// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function secretMessage() {
    alert("You have unlocked the secret message!")
}
function displayLorax() {
    document.getElementById("loraxContent").style.display = "block";
    document.getElementById("loraxxContent").style.display = "none";
    document.getElementById("defaultContent").style.display = "none";
}
function displayLoraxx() {
    document.getElementById("loraxContent").style.display = "none";
    document.getElementById("loraxxContent").style.display = "block";
    document.getElementById("defaultContent").style.display = "none";
}
function orangeBackground() {
    document.body.style.backgroundColor = "orange";
    console.log(document)
}