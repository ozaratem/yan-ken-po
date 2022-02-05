console.log("Rock, Paper, Scissors")

// function print(a, b) {
//   console.log("imprimir", a, b);
// }
// print("hola", true);

// function parseText(a) {
//  return a.replaceAll("-"," ")
//  console.log("Aqui estoy");
// } 

// const texto = "Hola-Mundo";

// const textoLimpio = parseText(texto);

// console.log(textoLimpio);

function gameCarlos() {
  const scissors = ["rock","paper"];
  const rock = ["paper","scissors"];
  const paper = ["scissors","rock"];
  const options = ["rock", "paper", "scissors"];
  const pc = Math.floor(Math.random()*3);
  let userOpt = prompt("1.rock 2.paper 3.scissors");
  let result = "";
  const userOptNum = parseInt(userOpt);
  
  if (userOptNum == pc + 1) {
    result = "Tie";
    console.log (result);
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
}

function game() {
  const options = ["Rock", "Paper", "Scissors"];
  const pc = Math.floor(Math.random()*3);
  let userOpt = prompt("Rock, Paper, Scissors");
  let result = "";

 //Rock winning condition
 if (userOpt === "Rock") {
  if (options[pc] === "Rock") {
    result = "You tie";
  } else if (options[pc] === "Paper") {
    result = "Pc win";
  } else if (options[pc] === "Scissors") {
    result = "You win";
  }
 } 
 // //Paper winning condition
 if (userOpt === "Paper") {
  if (options[pc] === "Rock") {
    result = "You win";
  } else if (options[pc] === "Paper") {
    result = "You tie";
  } else if (options[pc] === "Scissors") {
    result = "Pc  win";
  }
 }
 // //Scissors winning condition 
 if (userOpt === "Scissors") {
  if (options[pc] === "Rock") {
    result = "Pc win";
  } else if (options[pc] === "Paper") {
    result = "You win";
  } else if (options[pc] === "Scissors") {
    result = "You tie";
  }
 }
  console.log(userOpt, pc, options, result);
}

// game();
// gameCarlos();