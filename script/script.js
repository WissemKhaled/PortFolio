$(document).ready(function(){
	$('.menu-button li a').on('click', function(el) {
		el.preventDefault();
		// variable qui seletionne ce que je cible
		let target = this.dataset.target;
		// varibale qui me di ce que je seletionne
		let targetHtml = $('#' + target);
		// La position de l'element que tu souhaite atteindre
		let scrollMoment = targetHtml.position().top;
		// La position actuelle de la page
		let scrollPos = $(window).scrollTop();

		let ecartPx = (scrollMoment - scrollPos);
		
		if (ecartPx >= 0) {
     		$('html, body').animate( {scrollTop: ecartPx}, 1500)
		} 
		//ecartPx = 0;
		console.log(ecartPx);
		/*else if (ecartPx < 0) {
			let ecartNeg = (ecartPx * -1);
			$('html, body').animate( {
        		scrollTop: ecartNeg
     		}, 1500);

			console.log(ecartNeg);
		}*/
	})

});