let msg1 = document.querySelector(".msg1");
let msg2 = document.querySelector(".msg2");
let msg3 = document.querySelector(".msg3");
let button = document.querySelector(".t-guess");
let borderBox = document.querySelector(".box");
let chance = 5;
let yourNum = [];
msg2.textContent = "Number of chance to guess: " + chance;
msg3.textContent = "Guessed numbers are: ";
let randomNumber = Math.floor(Math.random() * 50) + 1;
console.log(randomNumber);
function start() {
  let answer = Number(document.getElementById("Text_value").value);
  if (answer <= 0 || answer > 50) {
    alert("Please Enter Number between 1-50");
  } else {
    if (answer > randomNumber) {
      borderBox.classList.add("false");
      msg1.textContent = "Your number is too hight.";
      document.getElementById("Text_value").value = "";
      chance--;
      msg2.textContent = "Number of chance to guess: " + chance;
      yourNum.push(answer);
      msg3.textContent = "Guessed numbers are: " + yourNum;
    } else if (answer < randomNumber) {
      borderBox.classList.add("false");
      msg1.textContent = "Your number is too low.";
      document.getElementById("Text_value").value = "";
      chance--;
      msg2.textContent = "Number of chance to guess: " + chance;
      yourNum.push(answer);
      msg3.textContent = "Guessed numbers are: " + yourNum;
    } else if (answer === randomNumber) {
      borderBox.classList.add("true");
      msg1.textContent = "Congratulation you won!!";
      button.disabled = true;
    }
  }
  if (chance <= 0) {
    button.disabled = true;
    alert("You failed restart the game. The answer is " + randomNumber);
  }
}

function restart() {
  randomNumber = Math.floor(Math.random() * 50) + 1;
  msg1.textContent = "Restart the game successfully!";
  button.disabled = false;
  document.getElementById("Text_value").value = "";
  chance = 5;
  msg2.textContent = "Number of chance to guess: " + chance;
  yourNum = [];
  msg3.textContent = "Guessed numbers are: " + yourNum;
  borderBox.classList.remove("false");
  borderBox.classList.remove("true");
}
