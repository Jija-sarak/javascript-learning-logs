const counter = document.getElementById("counter");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
let timerId = null;

startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    timerId = setInterval(() => {
        counter.innerText = Number(counter.innerText) + 1;
    }, 1000);
});

pauseBtn.addEventListener("click", () => {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
        pauseBtn.innerText = "Resume";
    } else {
        pauseBtn.innerText = "Pause";
        timerId = setInterval(() => {
            counter.innerText = Number(counter.innerText) + 1;
        }, 1000);
    }
});

resetBtn.addEventListener("click", () => {
    clearInterval(timerId);
    pauseBtn.innerText = "Pause";
    timerId = null;
    counter.innerText = 0;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
});