document.getElementById("stopButton").onclick = illuminateRed;
document.getElementById("slowButton").onclick = illuminateYellow;
document.getElementById("goButton").onclick =turnGreen;

function illuminateRed() {
  clearLights();
  document.getElementById("stopLight").style.backgroundColor = "red";
}

function illuminateYellow() {
  clearLights();
  document.getElementById("slowLight").style.backgroundColor = "yellow";
}

function turnGreen(){
  
}




function clearLights() {
  document.getElementById("stopLight").style.backgroundColor = "black";
  document.getElementById("slowLight").style.backgroundColor = "black";
  document.getElementById("goLight").style.backgroundColor = "black";
}
