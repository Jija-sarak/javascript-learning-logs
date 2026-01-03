const myBtn = document.getElementById("myBtn");
const msgArea = document.getElementById("msg-area");

myBtn.addEventListener("click", () => {
    myBtn.disabled = true;
    msgArea.innerHTML = "<p>Loading message...</p>";
    msgArea.style.color = "black";

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random() * 1;
            if (random > 0.5) {
                resolve("Message loaded successfully!");
            } else {
                reject("Something went wrong!");
            }
        }, 2000);
    });

    promise.then(msg => {
        msgArea.innerHTML = `<p>${msg}</p>`;
        msgArea.style.color = "green";
        myBtn.disabled = false;
    }).catch(error => {
        msgArea.innerHTML = `<p>${error}</p>`;
        msgArea.style.color = "red";
        myBtn.disabled = false;
    });
});