// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function resetResult() {
    document.getElementById("SmoothieResult").style.display = "none";
    document.getElementById("SwampResult").style.display = "none";
    document.getElementById("WaterResult").style.display = "none";
    document.getElementById("TempleResult").style.display = "none";
}

function seeResult() {
    var Smoothie = 0;
    var Swamp = 0;
    var Water = 0;
    var Temple = 0;

    if (document.getElementById("hot").checked) {
        Smoothie += 1;
        Water += 1;
    } else if (document.getElementById("cold").checked) {
        Swamp += 1;
    } else {
        Temple += 1;
    }

    if (document.getElementById("pink").checked) {
        Temple += 1;
    } else if (document.getElementById("blue").checked) {
        Water += 1;
    } else if (document.getElementById("green").checked) {
        Swamp += 1;
    } else {
        Smoothie += 1;
    }

    if (document.getElementById("chocolate").checked) {
        Smoothie += 1;
    } else if (document.getElementById("gummy").checked) {
        Temple += 1;
    } else if (document.getElementById("sour").checked) {
        Water += 1;
    } else {
        Swamp += 1;
    }

    if (document.getElementById("beach").checked) {
        Smoothie += 1;
    } else if (document.getElementById("mountain").checked) {
        Water += 1;
    } else if (document.getElementById("forest").checked) {
        Swamp += 1;
    } else {
        Temple += 1;

    }
    if (document.getElementById("hiking").checked) {
        Swamp += 1;
    } else if (document.getElementById("sports").checked) {
        Water += 1;
    } else if (document.getElementById("friends").checked) {
        Temple += 1;
    } else {
        Smoothie += 1;
    }
    
    

    resetResult();

    if (Smoothie > Swamp && Smoothie > Water && Smoothie > Temple) {
        document.getElementById("SmoothieResult").style.display = "block";
    } else if (Swamp > Smoothie && Swamp > Water && Swamp > Temple) {
        document.getElementById("SwampResult").style.display = "block";
    } else if (Water > Smoothie && Water > Swamp && Water > Temple) {
        document.getElementById("WaterResult").style.display = "block";
    } else {
        document.getElementById("TempleResult").style.display = "block";
    }
}
