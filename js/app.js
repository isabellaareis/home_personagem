// Identificar o clique no menu
// Verificar o item que foi clicado e fazer referência com o alvo
// Verificar a distância entre o alvo e o topo
// Animar o scroll até o alvo
// Scroll suave para link interno
const swiper = new Swiper('.swiper', {
	// Optional parameters
	slidesPerView: 1,
    spaceBetween: 30,
	loop: true,
	autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  });

$('nav a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('nav').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

$('#filmes-carousel .swiper-slide img').click(function(e){
	e.preventDefault();
	var id = $(this).attr('destination'),
			menuHeight = $('nav').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

// Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// Animação ao Scroll
(function(){
	var $target = $('.anime'),
			animationClass = 'anime-start',
			offset = $(window).height() * 3/4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 200));
})();

const acaoMudancaCard = (id) => {
	switch(id){
		case "john-wick":
			swiper.slideTo(0)
			break
		case "john-wick-2":
			swiper.slideTo(1)
			break
		case "john-wick-3":
			swiper.slideTo(2)
			break
		case "john-wick-4":
			swiper.slideTo(3)
			break
	}
}