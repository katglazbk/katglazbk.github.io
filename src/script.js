//Hides refresh button on load, could be optimized in the future
window.onload = function() {
    document.getElementById("refresh").style.display="none";
};

//Clears all the check boxes
function clearBoxes(){
    var checkedBoxes = document.querySelectorAll('input:checked') //Get all the boxes that are checked
    for (var i = 0; i < checkedBoxes.length; i++) { //Run through each checked box and uncheck it
        checkedBoxes[i].checked = false;
    }
}

//Calculates your score
function calculateScore() {
    var totalChecked = document.querySelectorAll('input[type="checkbox"]:checked') //Gets all the boxes that were checked
    var score = 100 - totalChecked.length //Subtracts the amount of boxes checked from 100, which results in the score

    //Associates your score with what it says about you
    var meaning;
    if (score >= 98) {
        meaning = "You&#39re probably a freshman in the honors program and freshly 18. It is actually quite impressive to get such a high score. Stay pure and consider a state school."
    } else if (score >= 94) {
        meaning = "You&#39re still figuring out college life. Maybe you&#39ve had a mango white claw or bummed a breeze, but you haven&#39t gone much further than that."
    } else if (score >= 77) {
        meaning = "This is about the average score range, which means you might actually go to Depaul. Go back to McGees or wherever you spawn."
    } else if (score >= 45) {
        meaning = "This score means you might actually be fun to hang around. You have definitely played darts at the O or sang karaoke at Trader Todd&#39s and McGees."
    } else if (score >= 9) {
        meaning = "You are definitely a &#39Bler. You&#39re the life of the loyolaparties, even when they flop. Just try not to go broke buying dispos and Pbr."
    } else {
        meaning = "This score means you&#39ve done some wild stuff. I fear for your liver and gpa."
    }

    var scoreDiv = document.getElementById("score"); //Gets the score div which is where the score is displayed
    var meaningDiv = document.getElementById("meaning"); //Gets the score div which is where the score is displayed
    scoreDiv.innerHTML = "Your Score: " + score.toString() //Sets the div text to your score
    meaningDiv.innerHTML = meaning //Sets the div text to your meaning
    document.getElementById("refresh").style.display="inline"; //Reveals the refresh page button
    document.body.scrollTop = 0; // Scrolls to top of the page for Safari
    document.documentElement.scrollTop = 0; // Scrolls to the top of the page for Chrome, Firefox, IE, and Opera
}

//Clears the page (clear page button)
function clearPage() {
    clearBoxes() //Calls the clearBoxes function to clear all the boxes
    var scoreDiv = document.getElementById("score"); //Gets the score div which is where the score is displayed
    var meaningDiv = document.getElementById("meaning"); //Gets the score div which is where the score is displayed
    scoreDiv.innerHTML = "" //Makes the score div blank
    meaningDiv.innerHTML = "" //Makes the meaning div blank
    document.getElementById("refresh").style.display="none"; //Hides the clear page button button
}
