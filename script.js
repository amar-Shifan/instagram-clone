
let popUp = document.getElementById("popUp");
let element = document.getElementById('buttons-more');

var ispopUp = false;
element.addEventListener("click", (e)=>{

    popUp.style.display="flex";
    console.log("working")
    ispopUp = !ispopUp;
    
    if(ispopUp){
        popUp.style.display="none"
    }
    
})

function like(e){

    
    e.classList.remove("fa-regular")
    e.classList.add("fa-solid")

    
}
