var input = document.querySelector(".input")
var btn =document.querySelector(".search")
let appear = true 
    
    
    btn.addEventListener("click", () => {
        if(appear){
            input.classList.add("translateX");
            
           input.focus();
           appear = false;
        }else {
            input.classList.remove("translateX");
            input.classList.add("translateX__2");
            appear= true;
        }
});


btn.addEventListener("click", () => {
    btn.classList.toggle("show")


})

