// Write a function using async/await to print three messages one after another, each 1 second apart.

async function promise(msg) {
    const response = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(msg);
        }, 1000);
    });

    return response;
}


(async function () {
    const firstMsg = await promise("First message");
    console.log(firstMsg);
    const secondMsg = await promise("Second message");
    console.log(secondMsg);
    const thirdMsg = await promise("Third message");
    console.log(thirdMsg);
})();