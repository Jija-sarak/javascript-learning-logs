const button = document.querySelector("button");
const trafficLight = document.querySelector("div");
const timer = document.querySelector("p");

function trafficLightHandler(time, color) {
    let timerId = null;
    const promise = new Promise((resolve) => {
        trafficLight.style.backgroundColor = color;
        timer.innerText = Math.floor(time / 1000);
        timerId = setInterval(() => {
            timer.innerText = Number(timer.innerText) - 1;
        }, 1000);

        setTimeout(() => {
            clearInterval(timerId);
            resolve(true);
        }, time);
    });

    return promise;
}

button.addEventListener("click", async () => {
    button.disabled = true;

    await trafficLightHandler(6000, "green");
    await trafficLightHandler(2000, "yellow");
    await trafficLightHandler(6000, "red");
    timer.innerText = "Cycle complete";
    button.disabled = false;

});