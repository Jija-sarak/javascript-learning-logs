const faqs = document.getElementsByTagName("p");

for(let i = 0; i < faqs.length; i+=2){
    faqs[i].addEventListener("click", () => {
        if(faqs[i].nextElementSibling.style.display == "none"){
            faqs[i].nextElementSibling.style.display = "block";
        }else{
            faqs[i].nextElementSibling.style.display = "none"
        };
    })
}