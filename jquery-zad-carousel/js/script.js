

$(function(){
	var carouselList = $('#carousel ul');
	
	$('.control-dot').first().addClass('active');
	var currentPosition = 0;    
	var slides = $('.slider-unit');
	var numberOfSlides = slides.length;
	console.log(numberOfSlides);

	
	setInterval(changeSlide, 3000);
	function changeSlide(){
		carouselList.animate({'margin-left': -500}, 500, moveFirstSlide);
		
	}
	function moveFirstSlide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	
		currentPosition++;
		console.log(currentPosition);

		if (currentPosition < numberOfSlides ) {
			$('.control-dot').removeClass('active').eq(currentPosition).addClass('active');
		} else if (currentPosition >= numberOfSlides) {
			currentPosition = 0;
			$('.control-dot').removeClass('active').eq(currentPosition).addClass('active');
		}
	}
});

