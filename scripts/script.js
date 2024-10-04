let element = document.querySelector(".share-icon");
let active;
element.addEventListener("click",() => {
    if(!active){
        let shareOptions = document.querySelector(".share-options")
        shareOptions.style.display = "flex";
        element.style.backgroundColor = "rgb(93 104 121)";
        active = true;
    }else{
        let shareOptions = document.querySelector(".share-options")
        shareOptions.style.display = "none";
        element.style.backgroundColor = "hsl(210, 46%, 95%)";
        active = false;
    }
    
})