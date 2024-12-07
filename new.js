const equation = document.getElementById("equations");
const answer = document.getElementById("answer");
const submit = document.getElementById("submit");
const eqcontainer = document.getElementById("eqcontainer");
const streakelem = document.getElementById("streak");
const bestelem = document.getElementById("best");

let streak = 0;
let best = 0;

let num1 = 1;
let num2 = 1;
let rightans = 1;

function updatedisplays() {
  equation.textContent = `${num1}x${num2}`;
  streakelem.textContent = `Streak: ${streak}`;
  if (streak >= best) {
    best = streak;
  }
  bestelem.textContent = `Best: ${best}`;
}

submit.onclick = function () {
  let ans = Number(answer.value);
  if (ans == rightans) {
    num1 = Math.round(Math.random() * (9 - 1) + 1);
    num2 = Math.round(Math.random() * (9 - 1) + 1);

    rightans = num1 * num2;
    streak++;

    eqcontainer.style = "background-color: lime;";

    setTimeout(() => {
      eqcontainer.style = "background-color: violet;";
    }, 250);

    ans.textContent = 0;
    updatedisplays();
  } else {
    streak = 0;

    eqcontainer.style = "background-color: red;";

    setTimeout(() => {
      eqcontainer.style = "background-color: violet;";
    }, 250);

    ans.value = 0;
    updatedisplays();
  }
};
