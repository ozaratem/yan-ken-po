// Global Variable
let score = 0;

// Alert Function
function printMessage(message) {
  if (message == "You win") {
    score = score +1;
  } else if (message == "You Lose") {
    score = score -1;
  }
  const t = `${message}, Score : ${score}`
  alert(t);
  document.getElementById("score").innerHTML = score;
}

// Game Logic
function game(userOpt) {
  const scissors = ["rock","paper"];
  const rock = ["paper","scissors"];
  const paper = ["scissors","rock"];
  const options = ["rock", "paper", "scissors"];
  const pc = Math.floor(Math.random()*3);
  let result = "";
  const userOptNum = parseInt(userOpt);
  
  if (userOptNum == pc + 1) {
    result = "Tie";
    alert(result);
    return
  }
  if (userOptNum == 1) {
    if (rock.indexOf(options[pc]) > 0) {
      result = "You win";
    } else {
      result = "You Lose"
    }
  }
  if (userOptNum == 2) {
    if (paper.indexOf(options[pc]) > 0) {
      result = "You win";
    } else {
      result = "You Lose"
    }
  }
  if (userOptNum == 3) {
    if (scissors.indexOf(options[pc]) > 0) {
      result = "You win";
    } else {
      result = "You Lose"
    }
  }
  console.log(userOptNum, pc, options, result);
  printMessage(result);
}

// Trigger Events
function main() {
  document.getElementById("s").onclick = function() {
    game("3");
  }
  document.getElementById("r").onclick = function() {
    game("1");
  }
  document.getElementById("p").onclick = function() {
    game("2");
  }
}

main();