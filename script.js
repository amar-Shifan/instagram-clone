
let popUp = document.getElementById("popUp");
let element = document.getElementById('buttons-more');

var count = 0;
element.addEventListener("click", (e)=>{

    popUp.style.display="flex";
    console.log("working")
    count++;
    
    if(count === 2){

        popUp.style.display="none"
        count = 0;
    }
})

function like(e){

    
    e.classList.remove("fa-regular")
    e.classList.add("fa-solid")

    
}
