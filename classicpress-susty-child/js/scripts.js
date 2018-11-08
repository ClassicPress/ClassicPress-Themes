jQuery(document).ready(function($) {
	'use strict'; // satisfy code inspectors

	if (window.matchMedia("screen and (max-width: 800px)").matches) {
		$('#menu-toggle').click(function() {
			$('.main-navigation').toggle();
			$('.get-started').toggle();
			$(this).attr('aria-expanded', function(_, attr) {
				return !(attr == 'true');
			});
		});
	}
	if (window.matchMedia("screen and (min-width: 801px)").matches) {
		$('.menu li a').on('mouseenter focus', function() {
			$(this).next('.sub-menu').show();
			$(this).parent().siblings().children('.sub-menu').hide();
		});
		$('.logo, .get-started').on('mouseenter focus', function() {
			$(this).siblings('nav').find('.sub-menu').hide();
		});
	}
});
