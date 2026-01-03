const btn = document.querySelector("button");
const msgArea = document.querySelector("#msg-area");

function fileUploadStep(time, msg){
    msgArea.innerText = msg;
    
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() >= 0.3){
                resolve(true);
            }else{
                reject("Upload failed! Please try again.")
            }
        }, time);
    });

    return promise;
}

btn.addEventListener("click", async () => {
    btn.disabled = true;
    msgArea.style.color = "black";

    try{

        await fileUploadStep(3000, "Uploading file..."); // Uplaoding file
        await fileUploadStep(2000, "Processing file..."); // Processing file
        await fileUploadStep(2000, "Saving result..."); // Saving result...

        msgArea.innerText = "Upload successful!";
        msgArea.style.color = "green";
        btn.disabled = false;

    }catch(err){

        msgArea.innerText = err;
        msgArea.style.color = "red";
        btn.disabled = false;
    }

});