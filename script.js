function searchProduct(){

let input = document.getElementById("search").value.toLowerCase();

let cards = document.querySelectorAll(".product-card");

cards.forEach(card => {

let name = card.innerText.toLowerCase();

if(name.includes(input)){
card.style.display="block"
}
else{
card.style.display="none"
}

})

}

function aiAssistant(){
alert("Hello 👋 I am the Jaiswal Mobile AI assistant. How can I help you?");
}
