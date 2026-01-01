// Display two messages in order — the first should appear immediately, and the second should appear 2 seconds later. 
// Use the delayedMessage() function to print the second message after the delay. Use .then() to make this happen.

console.log("first message appears immediately");

function delayedMessage(){
    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve("after 2 seconds delay appears second message");
        }, 2000);
    })

    return promise;
}

(async function () {
    await delayedMessage().then(response => console.log(response)).catch(error => console.error(error));
})();