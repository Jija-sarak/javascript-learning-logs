// Use try...catch to handle a rejected Promise returned by delayedMessage().

console.log("first message appears immediately");

function delayedMessage(){
    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve("after 2 seconds delay appears second message");
        }, 2000);
    });

    return promise;
}

(async function () {
    try{
        const response = await delayedMessage();

        console.log(response)

    }catch(err){
        console.error(err);
    }
})();