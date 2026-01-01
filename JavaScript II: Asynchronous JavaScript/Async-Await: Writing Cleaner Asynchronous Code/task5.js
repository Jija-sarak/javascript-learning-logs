// Display two messages in order — the first should appear immediately, and the second 
// should appear 2 seconds later. Use the "delayedMessage()" function to print the second
//  message after the delay. Use await to make this happen.

console.log("first message");

async function delayedMessage(){
  const promise = await new Promise((resolve) => {
    setTimeout(() => {
        resolve("second message after 2 seconds delay");
    }, 2000);
  });
  
  return promise;
}

(async function () {
    msg = await delayedMessage();
    console.log(msg);
})();