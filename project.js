var slideIndex = 1;
    
showSlide(slideIndex);

function nextslide(n) {
    showSlide(slideIndex += n);
    

}

function showSlide(n) {
    var slides = document.getElementsByClassName("lesson")
        
    if (n > slides.length){
            slideIndex = 1;

    }
    if (n < 1 ) {
        slideIndex = 3;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        console.log(slides[i])
    }
    slides[slideIndex - 1].style.display = "block";
}
