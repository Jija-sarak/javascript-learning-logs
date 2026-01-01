const button = document.getElementById("btn");
button.addEventListener("click", () => {
    button.innerText = "Processing...";
    button.disabled = true;

    setTimeout(() => {
        button.innerText = "Done!";

        setTimeout(() => {
            button.innerText = "Click Me!";
            button.disabled = false;
        }, 1000);
    }, 2000);

});