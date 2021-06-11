let timer = document.getElementById("timer");
let input = document.getElementById("input");

let timerId;

document.getElementById('button').onclick = function() {
  clearInterval(timerId);

  timer.innerHTML = input.value;

  timerId = setInterval(displayTimerSeconds, 1000);
}

let displayTimerSeconds = function() {
  let value = Number.parseInt(timer.innerHTML);

  if (value === 0) {
    clearInterval(timerId);
  } else {
    timer.innerHTML = --value;
  }
};
