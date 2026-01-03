const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const msg = document.querySelector("p");

function promiseHandler(){
    const promise = new Promise((resolve) =>{
        setTimeout(() => {
            resolve(true)
        },1000);
    });

    return promise
}

btn1.addEventListener("click", () => {
    btn1.disabled = true;
    promiseHandler().then(() => {
        btn2.disabled = false;
    }).catch(err => {
        msg.innerText = err;
    });
});

btn2.addEventListener("click", () => {
    btn2.disabled = true;
    promiseHandler().then(() => {
        btn3.disabled = false;
    }).catch(err => {
        msg.innerText = err;
    });
});

btn3.addEventListener("click", () => {
    btn3.disabled = true;
    promiseHandler().then(() => {
        msg.innerText = "All steps completed! Thank you.";
    }).catch(err => {
        msg.innerText = err;
    });
});