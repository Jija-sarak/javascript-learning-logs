const myBtn = document.getElementById("myBtn");
const msgArea = document.getElementById("msg-area");

async function msg() {
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

    return promise;
}

myBtn.addEventListener("click", async () => {
    myBtn.disabled = true;
    msgArea.innerHTML = "<p>Loading message...</p>";
    msgArea.style.color = "black";

    try {
        const promise = await msg();
        msgArea.innerHTML = `<p>${promise}</p>`;
        msgArea.style.color = "green";
        myBtn.disabled = false;

    } catch (err) {
        msgArea.innerHTML = `<p>${err}</p>`;
        msgArea.style.color = "red";
        myBtn.disabled = false;
    }

});


