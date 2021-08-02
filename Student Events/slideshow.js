var slideshowContainers = document.getElementsByClassName("slideshow-container");
for(let s = 0; s < slideshowContainers.length; s++) {
	var slides = slideshowContainers[s].querySelectorAll('.mySlides');
    var dots = slideshowContainers[s].querySelectorAll('.dot');
	var slideIndex = 0;
	showSlides(slides, dots, slideIndex);
};


function showSlides(slides, dots, slideIndex) {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    };
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(function() {
		showSlides(slides, dots, slideIndex)
	}, 4000);
};
