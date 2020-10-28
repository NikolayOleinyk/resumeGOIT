let imgLeft = document.querySelector(".left");
let imgRight = document.querySelector(".right");
let animation = document.querySelector(".animation");


animation.addEventListener('mouseover', function(e){
    if (e.target.classList.contains("left")){  
        imgLeft.classList.remove("left");
        imgLeft.classList.add("right");
        imgRight.classList.remove("right");
        imgRight.classList.add("left");
    }
});

animation.addEventListener('mouseout', function(e){
    if (e.target.classList.contains("left")){
        imgRight.classList.remove("left");
        imgRight.classList.add("right");
        imgLeft.classList.remove("right");
        imgLeft.classList.add("left");
        
    }
});