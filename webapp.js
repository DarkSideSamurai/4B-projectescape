// JavaScript Document
function changeDisplay(choice) {

	switch(choice) {
	case "forest":

	// change story text

document.getElementByID("story").innerHTML = "INSERT TEXT HERE";

// change picture

document.getElementByID("picture").setAttribute("src", "newimage.jpg");

// change buttons

// this can be done many different ways

// idea #1:

document.getElementByID("buttons").innerHTML = "<input type='button' THIS IS NOT COMPLETE><ADD MORE BUTTONS HERE>";

// idea #2:

var btn1 = document.createElement("BUTTON");

btn1.setAttribute("onClick", "changeDisplay('path')");

btn1.innerHTML = "Take the path";

var btn2 = document.createElement("BUTTON");

btn2.setAttribute("onClick", "changeDisplay('east')");

btn2.innerHTML = "Head East";

// you could add as many buttons as you needed here

document.getElementByID("buttons").innerHTML = btn1 + btn2;

break;

case "path":

// copy code from above and adjust

case "east":

// copy code from above and adjust

case "west":

// copy code from above and adjust

}
}