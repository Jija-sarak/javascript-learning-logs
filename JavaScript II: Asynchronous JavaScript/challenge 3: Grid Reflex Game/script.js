const grids = document.getElementsByTagName("button");
const score = document.getElementById("score");

let currentActiveIndex = null;
let clicked = false;
let intervalId = null;

for (let i = 0; i < grids.length; i++) {
    grids[i].addEventListener("click", () => {
        if (i === currentActiveIndex && !clicked) {
            score.innerText = Number(score.innerText) + 1;
            clicked = true;
        }
    });
}

intervalId = setInterval(() => {

    if(currentActiveIndex !== null){
        grids[currentActiveIndex].classList.remove("active");
    }

    const validIndices = [];
    for(let i = 0; i < grids.length; i++){
        if(i !== currentActiveIndex){
            validIndices.push(i);
        }
    }

    const newActiveIndex = validIndices[Math.floor(Math.random()*validIndices.length)];

    currentActiveIndex = newActiveIndex;
    grids[newActiveIndex].classList.add("active");
    clicked = false;

    setTimeout(() => {
        grids[newActiveIndex].classList.remove("active");

        if (currentActiveIndex === newActiveIndex) {
            currentActiveIndex = null;
        }

    }, 1000);

}, 2000);

setTimeout(() => {
    clearInterval(intervalId);

    if (currentActiveIndex !== null) {
        grids[currentActiveIndex].classList.remove("active");
    }

    for (let i = 0; i < grids.length; i++) {
        grids[i].disabled = true;
    }
    
}, 30000);