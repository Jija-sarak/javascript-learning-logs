const textInput = document.getElementById("textInput");

textInput.addEventListener("input", () =>{
    const count = textInput.value.length;
    const counter = document.getElementById("charCount");
    counter.innerText = `Characters: ${count} / 100`;

    if(count >= 100){
        counter.style.color = "red";
    }else{
        counter.style.color = "black";
    }
});