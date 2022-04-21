var firstTitle = document.getElementById("changeFirstTitle");
var bodyTwo = document.getElementById("body2");

function reset() {
    firstTitle.setAttribute("style", "color: black");
    bodyTwo.setAttribute("style", "background-color: #649F5E");
}

function changeBodyColor() {
    var bodyColor = prompt("What color should the body be?");
    bodyTwo.setAttribute("style", "background-color: " + bodyColor);
}

function changeTitleColor() {
    var colorOne = prompt("What color should the title be?");
    firstTitle.setAttribute("style", "color: " + colorOne);
}