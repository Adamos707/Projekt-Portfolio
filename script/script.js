let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");

let dot1 = document.querySelector("#dot1");
let dot2 = document.querySelector("#dot2");
let dot3 = document.querySelector("#dot3");

let slide1 = document.querySelector("#obrazek1");
let slide2 = document.querySelector("#obrazek2");
let slide3 = document.querySelector("#obrazek3");

const showSlide = (slideToShow) => {
    [slide1, slide2, slide3].forEach(slide => {
        slide.style.display = "none";
    });
    slideToShow.style.display = "block";
};

dot1.addEventListener('click', function() {
    showSlide(slide1);
    dot1.style.width="50px";
    dot1.style.height="50px";
    dot2.style.width="30px";
    dot2.style.height="30px";
    dot3.style.width="30px";
    dot3.style.height="30px";
});

dot2.addEventListener('click', function() {
    showSlide(slide2);
    dot2.style.width="50px";
    dot2.style.height="50px";
    dot1.style.width="30px";
    dot1.style.height="30px";
    dot3.style.width="30px";
    dot3.style.height="30px";
});

dot3.addEventListener('click', () => {
    showSlide(slide3);
    dot3.style.width="50px";
    dot3.style.height="50px";
    dot1.style.width="30px";
    dot1.style.height="30px";
    dot2.style.width="30px";
    dot2.style.height="30px";
})

arrowLeft.addEventListener('click', function(){
    if(slide2.style.display==="block"){
        showSlide(slide1)
        dot2.style.width="50px";
        dot2.style.height="50px";
        dot1.style.width="30px";
        dot1.style.height="30px";
        dot3.style.width="30px";
        dot3.style.height="30px";
    }
    else if(slide3.style.display==="block"){
        showSlide(slide2)
        dot2.style.width="50px";
        dot2.style.height="50px";
        dot1.style.width="30px";
        dot1.style.height="30px";
        dot3.style.width="30px";
        dot3.style.height="30px";
    }
    else{
        showSlide(slide3)
        dot3.style.width="50px";
        dot3.style.height="50px";
        dot1.style.width="30px";
        dot1.style.height="30px";
        dot2.style.width="30px";
        dot2.style.height="30px";
    }

})
arrowRight.addEventListener('click', () => {
    if (slide1.style.display === "block") {
        showSlide(slide2);
        dot2.style.width="50px";
        dot2.style.height="50px";
        dot1.style.width="30px";
        dot1.style.height="30px";
        dot3.style.width="30px";
        dot3.style.height="30px";
    } else if (slide2.style.display === "block") {
        showSlide(slide3);
        dot3.style.width="50px";
        dot3.style.height="50px";
        dot1.style.width="30px";
        dot1.style.height="30px";
        dot2.style.width="30px";
        dot2.style.height="30px";
    } else {
        showSlide(slide1);
        dot1.style.width="50px";
        dot1.style.height="50px";
        dot2.style.width="30px";
        dot2.style.height="30px";
        dot3.style.width="30px";
        dot3.style.height="30px";
    }
})