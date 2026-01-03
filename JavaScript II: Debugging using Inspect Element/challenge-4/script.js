const searchBox = document.getElementById("searchBox");
const productsList = document.getElementsByTagName("p");

searchBox.addEventListener("input", () => {

    for(let i = 0; i < productsList.length; i++){
        if(productsList[i].innerText.toLowerCase().includes(searchBox.value.toLowerCase())){
          productsList[i].style.display = "block";
        }else{
          productsList[i].style.display = "none";   
        }
    }

});